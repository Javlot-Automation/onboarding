
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

export function mt5ShowAlert(message, type, showSupport = false, rawError = null) {
    const el = document.getElementById('mt5Alert');
    if (!el) return;

    let html = ``;

    if (showSupport) {
        const supportSubject = t('contact_support_subject');
        // Include both user-friendly message and raw error for support team
        // Sanitize raw error to remove internal service names
        let sanitizedError = rawError ? rawError.replace(/metacopier/gi, 'service').replace(/MetaCopier/gi, 'Service') : null;

        let supportBody = `${t('contact_support_body')}\n\n`;
        supportBody += `Message: "${message}"\n`;
        if (sanitizedError) {
            supportBody += `\nError code: ${sanitizedError}\n`;
        }
        supportBody += `\n---\nPlease describe what you were doing when this error occurred:\n`;
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

    // Lock dimensions to prevent layout shift
    const computedStyle = window.getComputedStyle(btn);
    btn.style.width = computedStyle.width;
    btn.style.height = computedStyle.height;
    btn.style.overflow = 'hidden';

    // Set initial content with first message
    btn.innerHTML = `
        <div class="btn-loading-container">
            <span class="btn-loading-text current">${t(messages[0])}</span>
        </div>
    `;

    // Change message every 5 seconds with slide-up effect
    loadingInterval = setInterval(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        const nextMsg = t(messages[msgIndex]);
        const container = btn.querySelector('.btn-loading-container');
        if (!container) return;

        const currentEl = container.querySelector('.btn-loading-text.current');

        // Create new element positioned below (invisible)
        const nextEl = document.createElement('span');
        nextEl.className = 'btn-loading-text next';
        nextEl.textContent = nextMsg;
        container.appendChild(nextEl);

        // Trigger reflow to ensure the 'next' styles are applied
        nextEl.offsetHeight;

        // Start the transition: current slides up and fades, next slides up and appears
        if (currentEl) {
            currentEl.classList.remove('current');
            currentEl.classList.add('prev');
        }
        nextEl.classList.remove('next');
        nextEl.classList.add('current');

        // Remove old element after transition completes
        setTimeout(() => {
            if (currentEl && currentEl.parentNode) {
                currentEl.remove();
            }
        }, 550);

    }, 5000); // 5 seconds per message
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

            // Show success screen instead of just an alert
            showSuccessScreen();
        } else {
            console.error("Server error response:", data);

            // Map backend errors to user-friendly messages
            let errorMsg = t('error_generic');
            const serverError = data && data.error ? data.error.toLowerCase() : '';

            // Payment/billing errors
            if (serverError.includes('payment failed') || serverError.includes('payment not verified')) {
                errorMsg = t('error_payment_failed');
            }
            // User/account not found
            else if (serverError.includes('user not found') || serverError.includes('not found in webflow')) {
                errorMsg = t('error_user_not_found');
            }
            // Account already exists (MetaCopier duplicate)
            else if (serverError.includes('already exists')) {
                errorMsg = t('error_account_exists');
            }
            // Connection/network errors
            else if (serverError.includes('connection error') || serverError.includes('timeout') || serverError.includes('timed out')) {
                errorMsg = t('error_connection');
            }
            // Configuration errors
            else if (serverError.includes('feature config failed') || serverError.includes('error configuring')) {
                errorMsg = t('error_config_failed');
            }
            // Missing fields
            else if (serverError.includes('missing required fields') || serverError.includes('missing fields')) {
                errorMsg = t('error_missing_fields');
            }
            // Decryption/technical errors (show generic message)
            else if (serverError.includes('decryption failed') || serverError.includes('invalid base64')) {
                errorMsg = t('error_generic');
            }
            // API errors - check for auth issues
            else if (serverError.includes('api error') || serverError.includes('invalid') || serverError.includes('authentication')) {
                errorMsg = t('error_invalid_credentials');
            }
            // Generic 400 error - likely credentials issue
            else if (response.status === 400) {
                errorMsg = t('error_invalid_credentials');
            }
            // Server errors (500+)
            else if (response.status >= 500) {
                errorMsg = t('error_generic');
            }

            // Always show support button on error - include raw server error for support
            stopButtonAnimation(f.submitBtn, originalHTML);
            mt5ShowAlert(errorMsg, 'error', true, serverError || `HTTP ${response.status}`);
        }
    } catch (err) {
        console.error("Submission error:", err);
        stopButtonAnimation(f.submitBtn, originalHTML);
        mt5ShowAlert(t('error_generic'), 'error', true, err.message || 'Network error');
    } finally {
        // Double check stop in case of weird return, although handled above
        if (loadingInterval) stopButtonAnimation(f.submitBtn, originalHTML);
        mt5UpdateSubmitState();
    }
}

// --- Success Screen ---
function showSuccessScreen() {
    const stepContent = document.querySelector('.step-content[data-step="9"] .step-content-body');
    if (!stepContent) return;

    // Hide sidebar and navigation
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';

    const buttonGroup = document.querySelector('.step-content[data-step="9"] .button-group');
    if (buttonGroup) buttonGroup.style.display = 'none';

    // Create success screen HTML
    stepContent.innerHTML = `
        <div class="success-screen">
            <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            
            <h1 class="success-title">${t('success_title')}</h1>
            <p class="success-subtitle">${t('success_subtitle')}</p>
            
            <div class="success-next-steps">
                <h3 class="success-next-title">${t('success_next_steps')}</h3>
                
                <div class="success-step-card">
                    <div class="success-step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <span>${t('success_step1')}</span>
                </div>
                
                <div class="success-step-card">
                    <div class="success-step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span>${t('success_step2')}</span>
                </div>
                
                <div class="success-step-card">
                    <div class="success-step-icon telegram-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </div>
                    <span>${t('success_step3')}</span>
                </div>
            </div>
            
            <a href="${t('success_telegram_url')}" target="_blank" rel="noopener noreferrer" class="telegram-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                ${t('success_telegram_btn')}
            </a>
            
            <p class="success-close-msg">${t('success_close_msg')}</p>
        </div>
    `;
}
