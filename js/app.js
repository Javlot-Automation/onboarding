import { initLanguage } from './utils.js';
import { initLightbox, updateStep } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Internationalization
    initLanguage();

    // Initialize UI Components
    initLightbox();

    // Start App Flow (Load current step, usually 0)
    updateStep();
});
