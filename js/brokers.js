import { state } from './state.js';
import { scrollToTop, animateInElement } from './utils.js';
// We use window.t because t() was global in backup. Or we can import.
// Using window.t ensures we use the one setup in i18n.js
// But explicit import is better for modules.
// However, circular dependency with i18n might be an issue? No, i18n.js only imports state.js.
// usage: t(key)

function t(key) {
    // Helper to proxy to the global t or imported implementation
    if (window.t) return window.t(key);
    return key;
}

// Helper to call updateStep explicitly (breaking circular dependency)
function callUpdateStep() {
    if (window.updateStep) window.updateStep();
}

// ================= VANTAGE (Step 3) =================

export function updateVantageStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="vantage"] .vantage-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="vantage"] .vantage-section[data-vantage-step="' + state.vantageSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('vantageStepDescription');
    if (desc) {
        if (state.vantageSubStep === 1) {
            desc.textContent = t('vantage_desc_1');
        } else if (state.vantageSubStep === 2) {
            desc.textContent = t('vantage_desc_2');
        } else if (state.vantageSubStep === 3) {
            desc.textContent = t('vantage_desc_3');
        } else if (state.vantageSubStep === 4) {
            desc.textContent = t('vantage_desc_4');
        }
    }

    if (state.vantageDirection && currentSection) {
        animateInElement(currentSection, state.vantageDirection);
    }

    updateVantageContinueButton();
    state.vantageDirection = null;
}

export function updateVantageContinueButton() {
    if (!state.vantageContinueBtn) state.vantageContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="vantage"] .btn-next');
    if (!state.vantageContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'vantage')) {
        state.vantageContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.vantageSubStep === 1) {
        const c1 = document.getElementById('vantageStep1Done');
        shouldDisable = !(c1 && c1.checked);
    } else if (state.vantageSubStep === 2) {
        shouldDisable = false;
    } else if (state.vantageSubStep === 3) {
        const c3 = document.getElementById('vantageStep3Done');
        shouldDisable = !(c3 && c3.checked);
    } else if (state.vantageSubStep === 4) {
        const c4 = document.getElementById('vantageStep4Done');
        shouldDisable = !(c4 && c4.checked);
    }

    state.vantageContinueBtn.disabled = shouldDisable;
}

export function handleVantageNext() {
    if (state.vantageSubStep === 1) {
        const c1 = document.getElementById('vantageStep1Done');
        if (!c1 || !c1.checked) {
            alert('Please confirm that you have completed this step.');
            return;
        }
        state.vantageDirection = 'forward';
        state.vantageSubStep = 2;
        updateVantageStep();
        return;
    }

    if (state.vantageSubStep === 2) {
        state.vantageDirection = 'forward';
        state.vantageSubStep = 3;
        updateVantageStep();
        return;
    }

    if (state.vantageSubStep === 3) {
        const c3 = document.getElementById('vantageStep3Done');
        if (!c3 || !c3.checked) {
            alert('Please confirm that you used the information above to open your account.');
            return;
        }
        state.vantageDirection = 'forward';
        state.vantageSubStep = 4;
        updateVantageStep();
        return;
    }

    if (state.vantageSubStep === 4) {
        const c4 = document.getElementById('vantageStep4Done');
        if (!c4 || !c4.checked) {
            alert('Please confirm that your trading account is created.');
            return;
        }
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}

// ================= BULLWAVES (Step 3) =================

export function updateBullwavesStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="bullwaves"] .bullwaves-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="bullwaves"] .bullwaves-section[data-bullwaves-step="' + state.bullwavesSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('bullwavesStepDescription');
    if (desc) {
        if (state.bullwavesSubStep === 1) {
            desc.textContent = t('bullwaves_desc_1');
        } else if (state.bullwavesSubStep === 2) {
            desc.textContent = t('bullwaves_desc_2');
        }
    }

    if (state.bullwavesDirection && currentSection) {
        animateInElement(currentSection, state.bullwavesDirection);
    }

    updateBullwavesContinueButton();
    state.bullwavesDirection = null;
}

export function updateBullwavesContinueButton() {
    if (!state.bullwavesContinueBtn) state.bullwavesContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="bullwaves"] .btn-next');
    if (!state.bullwavesContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'bullwaves')) {
        state.bullwavesContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.bullwavesSubStep === 1) {
        const c1 = document.getElementById('bullwavesStep1Done');
        shouldDisable = !(c1 && c1.checked);
    } else if (state.bullwavesSubStep === 2) {
        const c2 = document.getElementById('bullwavesStep2Done');
        shouldDisable = !(c2 && c2.checked);
    }

    state.bullwavesContinueBtn.disabled = shouldDisable;
}

export function handleBullwavesNext() {
    if (state.bullwavesSubStep === 1) {
        const c1 = document.getElementById('bullwavesStep1Done');
        if (!c1 || !c1.checked) {
            alert('Please confirm that you entered the right MetaTrader setup informations.');
            return;
        }
        state.bullwavesDirection = 'forward';
        state.bullwavesSubStep = 2;
        updateBullwavesStep();
        return;
    }

    if (state.bullwavesSubStep === 2) {
        const c2 = document.getElementById('bullwavesStep2Done');
        if (!c2 || !c2.checked) {
            alert('Please confirm that your account is correctly setup.');
            return;
        }
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}

// ================= PU PRIME (Step 3) =================

export function updatePuprimeStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="puprime"] .puprime-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="puprime"] .puprime-section[data-puprime-step="' + state.puprimeSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('puprimeStepDescription');
    if (desc) {
        if (state.puprimeSubStep === 1) {
            desc.textContent = t('puprime_desc_1');
        } else if (state.puprimeSubStep === 2) {
            desc.textContent = t('puprime_desc_2');
        } else if (state.puprimeSubStep === 3) {
            desc.textContent = t('puprime_desc_3');
        }
    }

    if (state.puprimeDirection && currentSection) {
        animateInElement(currentSection, state.puprimeDirection);
    }

    updatePuprimeContinueButton();
    state.puprimeDirection = null;
}

export function updatePuprimeContinueButton() {
    if (!state.puprimeContinueBtn) state.puprimeContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="puprime"] .btn-next');
    if (!state.puprimeContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'puprime')) {
        state.puprimeContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.puprimeSubStep === 1) {
        shouldDisable = false;
    } else if (state.puprimeSubStep === 2) {
        const c2 = document.getElementById('puprimeStep2Done');
        shouldDisable = !(c2 && c2.checked);
    } else if (state.puprimeSubStep === 3) {
        const c3 = document.getElementById('puprimeStep3Done');
        shouldDisable = !(c3 && c3.checked);
    }

    state.puprimeContinueBtn.disabled = shouldDisable;
}

export function handlePuprimeNext() {
    if (state.puprimeSubStep === 1) {
        state.puprimeDirection = 'forward';
        state.puprimeSubStep = 2;
        updatePuprimeStep();
        return;
    }

    if (state.puprimeSubStep === 2) {
        const c2 = document.getElementById('puprimeStep2Done');
        if (!c2 || !c2.checked) {
            alert('Please confirm that you entered the informations above to create your MetaTrader account.');
            return;
        }
        state.puprimeDirection = 'forward';
        state.puprimeSubStep = 3;
        updatePuprimeStep();
        return;
    }

    if (state.puprimeSubStep === 3) {
        const c3 = document.getElementById('puprimeStep3Done');
        if (!c3 || !c3.checked) {
            alert('Please confirm that your account is created and your profile is verified.');
            return;
        }
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}

// ================= AXI (Step 3) =================

export function updateAxiStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="axi"] .axi-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="axi"] .axi-section[data-axi-step="' + state.axiSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('axiStepDescription');
    if (desc) {
        if (state.axiSubStep === 1) {
            desc.textContent = t('axi_desc_1');
        } else if (state.axiSubStep === 2) {
            desc.textContent = t('axi_desc_2');
        } else if (state.axiSubStep === 3) {
            desc.textContent = t('axi_desc_3');
        } else if (state.axiSubStep === 4) {
            desc.textContent = t('axi_desc_4');
        }
    }

    if (state.axiDirection && currentSection) {
        animateInElement(currentSection, state.axiDirection);
    }

    updateAxiContinueButton();
    state.axiDirection = null;
}

export function updateAxiContinueButton() {
    if (!state.axiContinueBtn) state.axiContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="axi"] .btn-next');
    if (!state.axiContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'axi')) {
        state.axiContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.axiSubStep === 1) {
        shouldDisable = false;
    } else if (state.axiSubStep === 2) {
        const a2 = document.getElementById('axiStep2Done');
        shouldDisable = !(a2 && a2.checked);
    } else if (state.axiSubStep === 3) {
        const a3 = document.getElementById('axiStep3Done');
        shouldDisable = !(a3 && a3.checked);
    } else if (state.axiSubStep === 4) {
        shouldDisable = false;
    }

    state.axiContinueBtn.disabled = shouldDisable;
}

export function handleAxiNext() {
    if (state.axiSubStep === 1) {
        state.axiDirection = 'forward';
        state.axiSubStep = 2;
        updateAxiStep();
        return;
    }

    if (state.axiSubStep === 2) {
        const a2 = document.getElementById('axiStep2Done');
        if (!a2 || !a2.checked) {
            alert('Please confirm that you entered the informations above to create your MetaTrader account.');
            return;
        }
        state.axiDirection = 'forward';
        state.axiSubStep = 3;
        updateAxiStep();
        return;
    }

    if (state.axiSubStep === 3) {
        const a3 = document.getElementById('axiStep3Done');
        if (!a3 || !a3.checked) {
            alert('Please confirm that you entered the informations above to setup your account.');
            return;
        }
        state.axiDirection = 'forward';
        state.axiSubStep = 4;
        updateAxiStep();
        return;
    }

    if (state.axiSubStep === 4) {
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}

// ================= STARTRADER (Step 3) =================

export function updateStartraderStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="startrader"] .startrader-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="startrader"] .startrader-section[data-startrader-step="' + state.startraderSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('startraderStepDescription');
    if (desc) {
        if (state.startraderSubStep === 1) {
            desc.textContent = t('startrader_desc_1');
        } else if (state.startraderSubStep === 2) {
            desc.textContent = t('startrader_desc_2');
        } else if (state.startraderSubStep === 3) {
            desc.textContent = t('startrader_desc_3');
        }
    }

    if (state.startraderDirection && currentSection) {
        animateInElement(currentSection, state.startraderDirection);
    }

    updateStartraderContinueButton();
    state.startraderDirection = null;
}

export function updateStartraderContinueButton() {
    if (!state.startraderContinueBtn) state.startraderContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="startrader"] .btn-next');
    if (!state.startraderContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'startrader')) {
        state.startraderContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.startraderSubStep === 1) {
        const s1 = document.getElementById('startraderStep1Done');
        shouldDisable = !(s1 && s1.checked);
    } else if (state.startraderSubStep === 2) {
        const s2 = document.getElementById('startraderStep2Done');
        shouldDisable = !(s2 && s2.checked);
    } else if (state.startraderSubStep === 3) {
        const s3 = document.getElementById('startraderStep3Done');
        shouldDisable = !(s3 && s3.checked);
    }

    state.startraderContinueBtn.disabled = shouldDisable;
}

export function handleStartraderNext() {
    if (state.startraderSubStep === 1) {
        const s1 = document.getElementById('startraderStep1Done');
        if (!s1 || !s1.checked) {
            alert('Please confirm that you understand this broker may require a VPN.');
            return;
        }
        state.startraderDirection = 'forward';
        state.startraderSubStep = 2;
        updateStartraderStep();
        return;
    }

    if (state.startraderSubStep === 2) {
        const s2 = document.getElementById('startraderStep2Done');
        if (!s2 || !s2.checked) {
            alert('Please confirm that you entered the information above to setup your account.');
            return;
        }
        state.startraderDirection = 'forward';
        state.startraderSubStep = 3;
        updateStartraderStep();
        return;
    }

    if (state.startraderSubStep === 3) {
        const s3 = document.getElementById('startraderStep3Done');
        if (!s3 || !s3.checked) {
            alert('Please confirm that your account is created and your identity verified.');
            return;
        }
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}

// ================= VT MARKETS (Step 3) =================

export function updateVtmarketsStep() {
    scrollToTop();
    const sections = document.querySelectorAll('.step-content[data-step="3"][data-broker="vtmarkets"] .vtmarkets-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const currentSection = document.querySelector('.step-content[data-step="3"][data-broker="vtmarkets"] .vtmarkets-section[data-vtmarkets-step="' + state.vtmarketsSubStep + '"]');
    if (currentSection) currentSection.classList.add('active');

    const desc = document.getElementById('vtmarketsStepDescription');
    if (desc) {
        if (state.vtmarketsSubStep === 1) {
            desc.textContent = t('vtmarkets_desc_1');
        } else if (state.vtmarketsSubStep === 2) {
            desc.textContent = t('vtmarkets_desc_2');
        } else if (state.vtmarketsSubStep === 3) {
            desc.textContent = t('vtmarkets_desc_3');
        } else if (state.vtmarketsSubStep === 4) {
            desc.textContent = t('vtmarkets_desc_4');
        }
    }

    if (state.vtmarketsDirection && currentSection) {
        animateInElement(currentSection, state.vtmarketsDirection);
    }

    updateVtmarketsContinueButton();
    state.vtmarketsDirection = null;
}

export function updateVtmarketsContinueButton() {
    if (!state.vtmarketsContinueBtn) state.vtmarketsContinueBtn = document.querySelector('.step-content[data-step="3"][data-broker="vtmarkets"] .btn-next');
    if (!state.vtmarketsContinueBtn) return;

    if (!(state.currentStep === 3 && state.selectedBroker === 'vtmarkets')) {
        state.vtmarketsContinueBtn.disabled = false;
        return;
    }

    let shouldDisable = false;

    if (state.vtmarketsSubStep === 1) {
        shouldDisable = false;
    } else if (state.vtmarketsSubStep === 2) {
        const c2 = document.getElementById('vtmarketsStep2Done');
        shouldDisable = !(c2 && c2.checked);
    } else if (state.vtmarketsSubStep === 3) {
        shouldDisable = false;
    } else if (state.vtmarketsSubStep === 4) {
        const c4 = document.getElementById('vtmarketsStep4Done');
        shouldDisable = !(c4 && c4.checked);
    }

    state.vtmarketsContinueBtn.disabled = shouldDisable;
}

export function handleVtmarketsNext() {
    if (state.vtmarketsSubStep === 1) {
        state.vtmarketsDirection = 'forward';
        state.vtmarketsSubStep = 2;
        updateVtmarketsStep();
        return;
    }

    if (state.vtmarketsSubStep === 2) {
        const c2 = document.getElementById('vtmarketsStep2Done');
        if (!c2 || !c2.checked) {
            alert('Please confirm that you entered the information above to setup your MetaTrader account.');
            return;
        }
        state.vtmarketsDirection = 'forward';
        state.vtmarketsSubStep = 3;
        updateVtmarketsStep();
        return;
    }

    if (state.vtmarketsSubStep === 3) {
        state.vtmarketsDirection = 'forward';
        state.vtmarketsSubStep = 4;
        updateVtmarketsStep();
        return;
    }

    if (state.vtmarketsSubStep === 4) {
        const c4 = document.getElementById('vtmarketsStep4Done');
        if (!c4 || !c4.checked) {
            alert('Please confirm that your profile has been verified.');
            return;
        }
        state.navDirection = 'forward';
        state.currentStep = 4;
        callUpdateStep();
        return;
    }
}
