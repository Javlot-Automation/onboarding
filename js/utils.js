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

        // Current time in New York
        const now = new Date();
        const options = {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            weekday: 'long',
            hour12: true
        };

        let timeString;
        try {
            const formatter = new Intl.DateTimeFormat('en-US', options);
            timeString = formatter.format(now);
        } catch (e) {
            console.error("Timezone error:", e);
            timeString = now.toLocaleTimeString(); // Fallback
        }

        displayEls.forEach(el => {
            if (el.textContent !== timeString) {
                el.textContent = timeString;
            }
        });
    } catch (e) {
        console.error("Error updating NY hours:", e);
    }
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
    // Safety check: retry after a brief delay to ensure DOM is ready and no interference
    setTimeout(updateNYHoursDisplay, 50);
}

// Expose to window for inline HTML onclick handlers
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;

