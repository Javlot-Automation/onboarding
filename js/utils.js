import { translations } from './i18n.js';

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
    const displayEl = document.getElementById('nyTimeDisplay');
    if (!displayEl) return;

    // Current time in New York
    const now = new Date();
    const options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        weekday: 'long',
        hour12: true
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    displayEl.textContent = formatter.format(now);
}

// --- i18n Logic ---

let currentLanguage = 'en';

export function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    applyTranslations();

    // Also save to localStorage if desired, but not in original code explicitly
}

export function initLanguage() {
    // Detect browser language or default to 'en'
    const browserLang = navigator.language || navigator.userLanguage;
    const defaultLang = browserLang.startsWith('fr') ? 'fr' : 'en';
    setLanguage(defaultLang);
}

export function applyTranslations() {
    const t = translations[currentLanguage];

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
}

// Expose to window for inline HTML onclick handlers
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;

