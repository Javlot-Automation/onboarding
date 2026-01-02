
import { state } from './state.js';
import * as mt5 from './mt5.js';
import * as brokers from './brokers.js';
import * as ui from './ui.js';
import { initRiskConfig } from './risk_config.js';

// We need to import ui.js to call updateButton functions?
// But updateButton functions are not exported?
// I exported them in previous step? No, only updateStep...
// I should export updateButton functions from ui.js if I need them here.
// Or, listeners just trigger a generic update or call the button update directly.
// The backup had them global.
// I can make ui.js export them or attach to window.
// Ideally, ui.js exports `updateStep4Button`, `updateMetaTraderContinueButton` etc.

// Since I wrote ui.js with them as local functions inside the module (not exported), I can't call them here directly unless I export them.
// I'll assume they are needed and I might need to update ui.js to export them.
// OR, I can just trigger 'change' event which might be enough if onchange="update..." attribute is used?
// But the backup used `addEventListener`.

// Let's rely on ui.js checking inputs.
// I'll replicate the listener logic from backup but inside this module.
// But the listener callback IS the update function.
// e.g. `disclaimerCheckbox.addEventListener('change', updateStep1Button);`

// So I MUST export `updateStepXButton` from ui.js.
// I will start by writing listeners.js assuming they are available on `ui` object or `window` object (if I attached them).
// I didn't attach `updateStep1Button` to window in ui.js.
// I should update ui.js to export them.

export function initStepListeners(step) {
    console.log('Initializing listeners for step:', step);

    // Step 1
    if (step === 1) {
        const disclaimerCheckbox = document.getElementById('disclaimerRead');
        if (disclaimerCheckbox) {
            // We need to call updateStep1Button. 
            // Since it's in ui.js and not exported, we have a problem.
            // WORKAROUND: trigger a custom event or make ui.js export it.
            // I will update ui.js to export them.
            // For now, I'll try to use the window one if I add it, or just re-implement the logic here?
            // Re-implementing logic duplicates code. Bad.
            // I will rely on `ui.updateStep1Button` and update ui.js later.
            disclaimerCheckbox.addEventListener('change', ui.updateStep1Button);
        }
    }

    // Step 2 (Broker Selection)
    if (step === 2) {
        const cards = document.querySelectorAll('.broker-card');
        cards.forEach(card => {
            card.addEventListener('click', function () {
                const broker = this.getAttribute('data-broker');
                const url = this.getAttribute('data-url');

                state.selectedBroker = broker;

                cards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');

                if (url) {
                    window.open(url, '_blank');
                }

                if (window.updateStep2Button) window.updateStep2Button();
            });
        });
    }

    // Step 4 (Deposit)
    if (step === 4) {
        const inputs = [
            'step4Deposit1000', 'step4NoMoreThan1000',
            'step4VantageAccountConfirm', 'step4VantageDepositMin', 'step4VantageFunded',
            'step4BullwavesFunded',
            'step4PuprimeRightAccount', 'step4PuprimeAmount1000', 'step4PuprimeFunded',
            'step4AxiAmount1000', 'step4AxiFundedCorrectly',
            'step4StartraderRightAccount', 'step4StartraderMin1000', 'step4StartraderFunded',
            'step4VtmarketsRightAccount', 'step4VtmarketsMin1000', 'step4VtmarketsFunded'
        ];

        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', ui.updateStep4Button);
            }
        });
    }

    // Step 5
    if (step === 5) {
        const cb = document.getElementById('mt5Installed');
        if (cb) {
            cb.addEventListener('change', ui.updateStep5Button);
        }
    }

    // Step 6 / MetaTrader
    if (step === 6) {
        const inputs = [
            'MetaTraderCredentialsDone', 'MetaTraderLoggedIn', 'MetaTraderQuotesAdded', 'MetaTraderOutsideNY'
        ];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', ui.updateMetaTraderContinueButton);
            }
        });
    }

    mt5.mt5UpdateSubmitState();

    // Step 7 (Verification)
    if (step === 7) {
        const inputs = [
            'step7PairCorrect', 'step7LotSize', 'step7OutsideNY',
            'step7TradeExecuted', 'step7ReadyConnect'
        ];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', ui.updateVerificationContinueButton);
            }
        });
    }


    // Step 9 (Connect to Javlot - previously Step 8)
    if (step === 9) {
        const mt5Email = document.getElementById('mt5Email');
        const mt5AccountNumber = document.getElementById('mt5AccountNumber');
        const mt5AccountPassword = document.getElementById('mt5AccountPassword');
        const mt5Server = document.getElementById('mt5Server');
        const mt5ConfirmCorrect = document.getElementById('mt5ConfirmCorrect');
        const mt5ConfirmSecure = document.getElementById('mt5ConfirmSecure');
        const mt5SubmitBtn = document.getElementById('mt5SubmitBtn');

        [mt5Email, mt5AccountNumber, mt5AccountPassword, mt5Server].forEach(inp => {
            if (!inp) return;
            inp.addEventListener('input', function () {
                this.classList.remove('mt5-error');
                mt5.mt5UpdateSubmitState();
            });
            inp.addEventListener('blur', function () {
                if (!this.value.trim()) this.classList.add('mt5-error');
                mt5.mt5UpdateSubmitState();
            });
        });

        [mt5ConfirmCorrect, mt5ConfirmSecure].forEach(cb => {
            if (cb) cb.addEventListener('change', mt5.mt5UpdateSubmitState);
        });

        if (mt5SubmitBtn) mt5SubmitBtn.addEventListener('click', mt5.mt5Submit);

        mt5.mt5UpdateSubmitState();
    }


    // Broker specific listeners (Step 3)
    if (step === 3) {
        // Vantage
        if (state.selectedBroker === 'vantage') {
            ['vantageStep1Done', 'vantageStep3Done', 'vantageStep4Done'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updateVantageContinueButton());
            });
        }
        // ... duplicates for other brokers ...
        if (state.selectedBroker === 'bullwaves') {
            ['bullwavesStep1Done', 'bullwavesStep2Done'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updateBullwavesContinueButton());
            });
        }
        // ... puprime ...
        if (state.selectedBroker === 'puprime') {
            ['puprimeStep2Done', 'puprimeStep3Done'].forEach(id => { // step1 has no checkbox
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updatePuprimeContinueButton());
            });
        }
        // ... axi ...
        if (state.selectedBroker === 'axi') {
            ['axiStep2Done', 'axiStep3Done'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updateAxiContinueButton());
            });
        }
        // ... startrader ...
        if (state.selectedBroker === 'startrader') {
            ['startraderStep1Done', 'startraderStep2Done', 'startraderStep3Done'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updateStartraderContinueButton());
            });
        }
        // ... vtmarkets ...
        if (state.selectedBroker === 'vtmarkets') {
            ['vtmarketsStep2Done', 'vtmarketsStep4Done'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', () => brokers.updateVtmarketsContinueButton());
            });
        }
    }
}
