
const MT5_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzFxtgKVOR3u+dJl4z+TQ
Cmm3Ou/KhB5ugpuYLPsR24YYlqQsNbgGbJ3VUXdex+rxrSSq3u6wShjoy/Mqqc8B
Zxnv5YEx4soYQ4Qvd+cf3b1s2kzwrq/lMpiHKZ+lFmQLTYlc0Eb9Z1bYQJbOBGji
6fYSxiQcTb2SdnQ4hUrGuROSByVpZu6kx9jM41Dd78aJZlcpiWxhPUcHirwxFEey
FTZR8/WpFlO8lgJpb0epBuPqm88VrQQTUSL/duDiPZnUfFPSo7n6lPQ7ok4sP+U3
DUklh4cLGdcK1aUGcXzfquKc0zO4/h70suLTvuqL5Nmo2zH7fsbAKItrIHc0PCri
dQIDAQAB
-----END PUBLIC KEY-----`;

import { state } from './state.js';


// Import translations helper
import { t } from './i18n.js';

export function mt5ShowAlert(message, type, showSupport = false) {
    const el = document.getElementById('mt5Alert');
    if (!el) return;

    let html = ``;

    if (showSupport) {
        const supportSubject = t('contact_support_subject');
        // Append the specific error message in quotes to the body
        const supportBody = `${t('contact_support_body')} "${message}"`;
        const mailto = `mailto:support@javlot.io?subject=${encodeURIComponent(supportSubject)}&body=${encodeURIComponent(supportBody)}`;

        // Inline layout: Message left, Button right.
        const btnStyle = `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: white; 
            border: 1px solid #e5e7eb; 
            color: #1f2937; 
            text-decoration: none; 
            font-size: 0.875rem; 
            font-weight: 500; 
            padding: 8px 16px; 
            border-radius: 8px; 
            white-space: nowrap; 
            flex-shrink: 0; 
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            transition: all 0.2s ease;
        `;

        html = `
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%;">
                <span style="flex: 1; color: #991b1b;">${message}<br><small style="opacity: 0.8; margin-top: 4px; display: block; color: #b91c1c;">${t('contact_support_intro')}</small></span>
                <a href="${mailto}" class="support-btn" style="${btnStyle}" onmouseover="this.style.backgroundColor='#f9fafb';this.style.borderColor='#d1d5db'" onmouseout="this.style.backgroundColor='white';this.style.borderColor='#e5e7eb'">
                    ${t('contact_support_btn')}
                </a>
            </div>
        `;
    } else {
        html = `<span>${message}</span>`;
    }

    el.innerHTML = html;
    el.className = 'mt5-alert ' + (type === 'success' ? 'success' : 'error') + ' show';

    // Only auto-hide if it's a success message. API errors should remain visible.
    if (type === 'success') {
        setTimeout(() => el.classList.remove('show'), 5000);
    }
}

export function mt5GetFields() {
    return {
        email: document.getElementById('mt5Email'),
        accountNumber: document.getElementById('mt5AccountNumber'),
        accountPassword: document.getElementById('mt5AccountPassword'),
        server: document.getElementById('mt5Server'),
        confirmCorrect: document.getElementById('mt5ConfirmCorrect'),
        confirmSecure: document.getElementById('mt5ConfirmSecure'),
        submitBtn: document.getElementById('mt5SubmitBtn')
    };
}

export function mt5Validate(showErrors = false) {
    const f = mt5GetFields();
    if (!f.email || !f.accountNumber || !f.accountPassword || !f.server || !f.confirmCorrect || !f.confirmSecure || !f.submitBtn) return false;

    const inputs = [f.email, f.accountNumber, f.accountPassword, f.server];
    let ok = true;

    inputs.forEach(i => {
        const valid = !!i.value.trim();
        if (!valid) ok = false;
        if (showErrors) i.classList.toggle('mt5-error', !valid);
        else i.classList.remove('mt5-error');
    });

    const c1 = f.confirmCorrect.checked;
    const c2 = f.confirmSecure.checked;
    if (!(c1 && c2)) ok = false;

    return ok;
}

export function mt5UpdateSubmitState() {
    const f = mt5GetFields();
    if (!f.submitBtn) return;
    f.submitBtn.disabled = !mt5Validate(false);
}

// --- Animation Helper ---
let loadingInterval = null;

function startButtonAnimation(btn) {
    if (!btn) return;

    const messages = ['loading_step1', 'loading_step2', 'loading_step3'];
    let msgIndex = 0;

    // Lock width to prevent jumping
    btn.style.width = getComputedStyle(btn).width;
    btn.style.height = getComputedStyle(btn).height; // Lock height too

    // Initial HTML structure
    btn.innerHTML = `
        <div class="btn-loading-container">
            <span class="btn-loading-text active">${t(messages[0])}</span>
        </div>
    `;

    loadingInterval = setInterval(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        const nextMsg = t(messages[msgIndex]);
        const container = btn.querySelector('.btn-loading-container');
        if (!container) return;

        // Current active becomes exit
        const current = container.querySelector('.btn-loading-text.active');
        if (current) {
            current.classList.remove('active');
            current.classList.add('exit');
        }

        // Create new enter element
        const newSpan = document.createElement('span');
        newSpan.className = 'btn-loading-text enter';
        newSpan.textContent = nextMsg;
        container.appendChild(newSpan);

        // Force reflow
        void newSpan.offsetWidth;

        // Animate in
        newSpan.classList.remove('enter');
        newSpan.classList.add('active');

        // Cleanup old exit elements after transition
        setTimeout(() => {
            if (current && current.parentNode) current.parentNode.removeChild(current);
        }, 500); // match transition duration

    }, 3000); // 3 seconds per message
}

function stopButtonAnimation(btn, originalHTML) {
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
    if (btn) {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        btn.style.width = ''; // Release constraints
        btn.style.height = '';
    }
}

export async function mt5Submit() {
    const f = mt5GetFields();
    if (!f.submitBtn) {
        return;
    }

    if (!mt5Validate(true)) {
        mt5ShowAlert(t('error_missing_fields'), 'error');
        mt5UpdateSubmitState();
        return;
    }

    const originalHTML = f.submitBtn.innerHTML;
    f.submitBtn.disabled = true;

    // Start Animation
    startButtonAnimation(f.submitBtn);

    try {
        // 1. Prepare Data
        const rawData = {
            email: f.email.value.trim(),
            accountNumber: f.accountNumber.value.trim(),
            accountPassword: f.accountPassword.value,
            server: f.server.value.trim(),
            percentage: state.riskLevel || 30
        };

        // 2. Encrypt Data
        // Check if JSEncrypt is available
        if (typeof JSEncrypt === 'undefined') {
            throw new Error("JSEncrypt library is not loaded.");
        }

        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(MT5_PUBLIC_KEY);

        const jsonString = JSON.stringify(rawData);

        const encryptedData = encrypt.encrypt(jsonString);

        if (!encryptedData) {
            throw new Error("Encryption failed. Data might be too long for RSA key.");
        }

        // 3. Send to Lambda
        const payload = {
            encrypted: true,
            data: encryptedData
        };

        const response = await fetch('https://bdpzmvhvl4.execute-api.us-west-2.amazonaws.com/Prod/webflow/webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = null;
        }

        if (response.ok) {
            stopButtonAnimation(f.submitBtn, originalHTML);
            mt5ShowAlert('Account setup successful! Your MT5 account has been securely linked.', 'success');

            // Reset Form
            f.email.value = '';
            f.accountNumber.value = '';
            f.accountPassword.value = '';
            f.server.value = '';
            f.confirmCorrect.checked = false;
            f.confirmSecure.checked = false;

            // Maybe redirect or show success state?
        } else {
            console.error("Server error response:", data);

            // Map Error
            let errorMsg = t('error_generic');
            const serverError = data && data.error ? data.error.toLowerCase() : '';

            if (serverError.includes('payment failed')) {
                errorMsg = t('error_payment_failed');
            } else if (serverError.includes('user not found')) {
                errorMsg = t('error_user_not_found');
            } else if (serverError.includes('missing required fields')) {
                errorMsg = t('error_missing_fields');
            } else if (serverError.includes('decryption failed') || serverError.includes('invalid base64')) {
                errorMsg = t('error_generic'); // Technical error
            } else if (response.status === 400) {
                // If generic 400 but not specific, possibly invalid credentials or parameters
                errorMsg = t('error_invalid_credentials');
            }

            // Append "Server says: ..." if debug needed? No, user wants clean UI.
            // But if it's a specific message from lambda that is useful...
            // The Lambda messages are quite specific ("Payment failed", "User not found").
            // Our mapping should cover them.

            // Always show support button on error
            stopButtonAnimation(f.submitBtn, originalHTML);
            mt5ShowAlert(errorMsg, 'error', true);
        }
    } catch (err) {
        console.error("Submission error:", err);
        stopButtonAnimation(f.submitBtn, originalHTML);
        mt5ShowAlert(t('error_generic') + (err.message ? ` (${err.message})` : ''), 'error', true);
    } finally {
        // Double check stop in case of weird return, although handled above
        if (loadingInterval) stopButtonAnimation(f.submitBtn, originalHTML);
        mt5UpdateSubmitState();
    }
}
