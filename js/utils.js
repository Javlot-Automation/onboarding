import { translations } from './i18n.js';
import { state } from './state.js';

// --- Global Helpers ---

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function animateInElement(el, direction) {
    if (!el || !direction) return;

    el.classList.remove('slide-in-right', 'slide-in-left');
    void el.offsetWidth; // reflow

    if (direction === 'forward') {
        el.classList.add('slide-in-right');
    } else {
        el.classList.add('slide-in-left');
    }

    el.addEventListener('animationend', function handler() {
        el.classList.remove('slide-in-right', 'slide-in-left');
    }, { once: true });
}

// --- Date/Time Helpers ---

export function updateNYHoursDisplay() {
    try {
        const displayEls = document.querySelectorAll('.ny-hours-local');
        if (displayEls.length === 0) return;

        // Target window: 14:30 - 17:30 UTC+1 (Brussels)
        // This corresponds to 13:30 - 16:30 UTC.

        const start = new Date();
        start.setUTCHours(13, 30, 0, 0);

        const end = new Date();
        end.setUTCHours(16, 30, 0, 0);

        const options = { hour: '2-digit', minute: '2-digit' };

        // Format to user's local time
        const startStr = start.toLocaleTimeString([], options);
        const endStr = end.toLocaleTimeString([], options);

        const timeString = `${startStr} - ${endStr}`;

        displayEls.forEach(el => {
            if (el.textContent !== timeString) {
                el.textContent = timeString;
            }
        });
    } catch (e) {
        console.error("Error updating NY hours:", e);
    }
}

export function updateNYSessionStatus() {
    try {
        const statusContainer = document.getElementById('ny-session-dynamic-status');
        if (!statusContainer) return;

        // Current time
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday

        // Check if it's weekend (markets closed)
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

        // Check if it's late night (23:00-00:00 Paris time = 22:00-23:00 UTC)
        // Paris is UTC+1, so 23:00 Paris = 22:00 UTC
        const currentUTCHour = now.getUTCHours();
        const isLateNight = (currentUTCHour >= 22 && currentUTCHour < 23);

        // Define Session Window in UTC for TODAY
        // Session is 13:30 UTC to 16:30 UTC
        const start = new Date();
        start.setUTCHours(13, 30, 0, 0); // 13:30 UTC

        const end = new Date();
        end.setUTCHours(16, 30, 0, 0);   // 16:30 UTC

        let isSessionActive = false;
        let isMarketClosed = false;
        let timeRemainingMsg = "";

        if (isWeekend) {
            // Markets are closed on weekends
            isSessionActive = false;
            isMarketClosed = true;

            // Calculate next Monday's opening time (7:00 UTC = 8:00 Paris)
            let nextMonday = new Date(now);
            if (dayOfWeek === 6) { // Saturday
                nextMonday.setDate(nextMonday.getDate() + 2); // +2 days to Monday
            } else { // Sunday
                nextMonday.setDate(nextMonday.getDate() + 1); // +1 day to Monday
            }
            nextMonday.setUTCHours(7, 0, 0, 0);

            // Format opening time in local timezone
            const openTimeLocal = nextMonday.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Get weekend message template
            let msg = translations[state.currentLang]['ny_market_closed_weekend'];
            msg = msg.replace('{openTime}', openTimeLocal);
            timeRemainingMsg = msg;

        } else if (isLateNight) {
            // Markets closed from 23h to 00h Paris time
            isSessionActive = false;
            isMarketClosed = true;

            // Calculate next morning opening (market reopens after midnight)
            let nextOpen = new Date(now);
            nextOpen.setUTCHours(23, 0, 0, 0); // 00:00 Paris time

            const diffMs = nextOpen - now;
            const diffMins = Math.max(0, Math.floor(diffMs / 60000));

            let msg = translations[state.currentLang]['ny_market_closed_late'] ||
                (state.currentLang === 'fr'
                    ? 'Les marchés sont fermés pendant la clôture journalière. Réouverture dans {remaining}'
                    : 'Markets are closed for daily maintenance. Reopening in {remaining}');

            const minsLabel = state.currentLang === 'fr' ? 'min' : 'm';
            msg = msg.replace('{remaining}', `${diffMins}${minsLabel}`);
            timeRemainingMsg = msg;

        } else if (now >= start && now <= end) {
            // Session is active (within trading hours on a weekday)
            isSessionActive = true;

            // Calculate remaining time until end
            const diffMs = end - now;
            const diffHrs = Math.floor(diffMs / 3600000);
            const diffMins = Math.floor((diffMs % 3600000) / 60000);

            // Format logic for "Ends in..."
            const hoursLabel = state.currentLang === 'fr' ? 'h' : 'h';
            const minsLabel = state.currentLang === 'fr' ? 'min' : 'm';
            let remainingStr = "";
            if (diffHrs > 0) remainingStr += `${diffHrs}${hoursLabel} `;
            remainingStr += `${diffMins}${minsLabel}`;

            // End time string local
            const endLocal = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Get raw template
            let msg = translations[state.currentLang]['ny_session_active_msg'];
            msg = msg.replace('{endTime}', endLocal).replace('{remaining}', remainingStr);

            timeRemainingMsg = msg;
        } else {
            isSessionActive = false;

            // Calculate time until NEXT session start
            // If now > end, next session is tomorrow start
            // If now < start, next session is today start
            let nextStart = new Date(start);
            if (now > end) {
                nextStart.setDate(nextStart.getDate() + 1);
            }

            // If next start falls on weekend, skip to Monday
            let nextDay = nextStart.getDay();
            if (nextDay === 6) { // Saturday
                nextStart.setDate(nextStart.getDate() + 2);
            } else if (nextDay === 0) { // Sunday
                nextStart.setDate(nextStart.getDate() + 1);
            }

            const diffMs = nextStart - now;
            const diffHrs = Math.floor(diffMs / 3600000);
            const diffMins = Math.floor((diffMs % 3600000) / 60000);

            const hoursLabel = state.currentLang === 'fr' ? 'h' : 'h';
            const minsLabel = state.currentLang === 'fr' ? 'min' : 'm';
            let remainingStr = "";
            if (diffHrs > 0) remainingStr += `${diffHrs}${hoursLabel} `;
            remainingStr += `${diffMins}${minsLabel}`;

            // Get raw template
            let msg = translations[state.currentLang]['ny_session_inactive_msg'];
            msg = msg.replace('{remaining}', remainingStr);

            timeRemainingMsg = msg;
        }

        // Render
        const isBlocked = isSessionActive || isMarketClosed;
        statusContainer.className = isBlocked ? 'warning-box error' : 'warning-box success';
        statusContainer.style.backgroundColor = isBlocked ? '#FEF2F2' : '#F0FDF4'; // Red-50 vs Green-50
        statusContainer.style.border = isBlocked ? '1px solid #DC2626' : '1px solid #16A34A';
        statusContainer.style.color = isBlocked ? '#991B1B' : '#166534';
        statusContainer.style.padding = '12px';
        statusContainer.style.borderRadius = '8px';
        statusContainer.style.fontSize = '14px';
        statusContainer.style.marginTop = '14px';

        // Determine status label
        let statusLabel;
        if (isSessionActive) {
            statusLabel = state.currentLang === 'fr' ? 'Session Active' : 'Session Active';
        } else if (isMarketClosed) {
            statusLabel = state.currentLang === 'fr' ? 'Marchés Fermés' : 'Markets Closed';
        } else {
            statusLabel = state.currentLang === 'fr' ? 'Session Fermée' : 'Session Closed';
        }

        statusContainer.innerHTML = `<strong style="color: inherit;">${statusLabel} : </strong> ${timeRemainingMsg}`;

        // Store blocked state for button disabling
        window.isMarketBlockedForStep6 = isBlocked;

        // Update button state if function exists
        if (typeof window.updateStep6Button === 'function') {
            window.updateStep6Button();
        }

    } catch (e) {
        console.error("Error updating NY Status:", e);
    }
}

// Economic announcements helper - converts Paris times to local timezone
export function getEconomicAnnouncementTimes() {
    // Paris-based times (UTC+1) for economic announcements
    const parisHours = [
        { hour: 9, minute: 30 },
        { hour: 13, minute: 30 },
        { hour: 14, minute: 15 },
        { hour: 14, minute: 30 },
        { hour: 15, minute: 30 },
        { hour: 16, minute: 0 },
        { hour: 20, minute: 0 },
        { hour: 20, minute: 30 }
    ];

    // Convert Paris time to local time
    return parisHours.map(time => {
        const parisDate = new Date();
        // Paris is UTC+1, set UTC time to Paris time - 1 hour
        parisDate.setUTCHours(time.hour - 1, time.minute, 0, 0);
        return parisDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });
}

export function updateEconomicAnnouncementsDisplay() {
    const container = document.getElementById('economic-announcements-list');
    if (!container) return;

    const times = getEconomicAnnouncementTimes();
    container.textContent = times.join(' • ');
}

// --- i18n Logic ---

export function setLanguage(lang) {
    if (!translations[lang]) return;
    state.currentLang = lang;

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    applyTranslations();

    // Also save to localStorage to match i18n.js behavior
    localStorage.setItem('preferredLanguage', lang);
}

export function initLanguage() {
    // Detect browser language or default to 'en'
    // Also check localStorage first (like i18n.js does)
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
        return;
    }

    const browserLang = navigator.language || navigator.userLanguage;
    const defaultLang = browserLang.startsWith('fr') ? 'fr' : 'en';
    setLanguage(defaultLang);
}

export function applyTranslations() {
    const currentLanguage = state.currentLang;
    const t = translations[currentLanguage];

    // 0. Sync Language Buttons (in case they were just loaded dynamically)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 1. Text content (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // 2. HTML content (data-i18n-html)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // 3. Placeholders (data-placeholder-i18n)
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
        const key = el.getAttribute('data-placeholder-i18n');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // 4. Update dynamic elements like NY hours
    updateNYHoursDisplay();
    updateNYSessionStatus();
    updateEconomicAnnouncementsDisplay();
    // Safety check: retry after a brief delay to ensure DOM is ready and no interference
    setTimeout(updateNYHoursDisplay, 50);
    setTimeout(updateEconomicAnnouncementsDisplay, 50);
}

// Expose to window for inline HTML onclick handlers
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;

