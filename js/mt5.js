
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

export function mt5ShowAlert(message, type) {
    const el = document.getElementById('mt5Alert');
    if (!el) return;
    el.textContent = message;
    el.className = 'mt5-alert ' + (type === 'success' ? 'success' : 'error') + ' show';
    setTimeout(() => el.classList.remove('show'), 5000);
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

export async function mt5Submit() {
    console.log("=== MT5 SUBMIT V2 START ===");
    const f = mt5GetFields();
    if (!f.submitBtn) {
        console.error("Submit button not found");
        return;
    }

    if (!mt5Validate(true)) {
        mt5ShowAlert('Please complete all required fields and confirmations before submitting.', 'error');
        mt5UpdateSubmitState();
        return;
    }

    const originalHTML = f.submitBtn.innerHTML;
    f.submitBtn.disabled = true;
    f.submitBtn.innerHTML = 'Securely Sending...<span class="mt5-spinner"></span>';

    try {
        // 1. Prepare Data
        const rawData = {
            email: f.email.value.trim(),
            accountNumber: f.accountNumber.value.trim(),
            accountPassword: f.accountPassword.value,
            server: f.server.value.trim(),
            percentage: state.riskLevel || 30
        };

        console.log("1. Raw Data Prepared:", rawData);

        // 2. Encrypt Data
        console.log("2. Helper: Starting Encryption with Public Key...");
        // Check if JSEncrypt is available
        if (typeof JSEncrypt === 'undefined') {
            throw new Error("JSEncrypt library is not loaded.");
        }

        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(MT5_PUBLIC_KEY);

        const jsonString = JSON.stringify(rawData);
        console.log("   - JSON String length:", jsonString.length);

        const encryptedData = encrypt.encrypt(jsonString);

        if (!encryptedData) {
            throw new Error("Encryption failed. Data might be too long for RSA key.");
        }

        console.log("3. Encryption Successful. Encrypted Data Length:", encryptedData.length);

        // 3. Send to Lambda
        const payload = {
            encrypted: true,
            data: encryptedData
        };

        console.log("4. Final Payload to Send:", JSON.stringify(payload, null, 2));

        const response = await fetch('https://5x18r6txri.execute-api.us-west-2.amazonaws.com/Prod/webflow/webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log("5. Network Response Status:", response.status);

        if (response.ok) {
            console.log("=== SUBMISSION SUCCESS ===");
            mt5ShowAlert('Account setup successful! Your MT5 account has been securely linked.', 'success');

            // Reset Form (Wait a bit or redirect? Backup just resets form)
            f.email.value = '';
            f.accountNumber.value = '';
            f.accountPassword.value = '';
            f.server.value = '';
            f.confirmCorrect.checked = false;
            f.confirmSecure.checked = false;
        } else {
            const errText = await response.text();
            console.error("Server error response:", errText);
            throw new Error('Server returned ' + response.status);
        }
    } catch (err) {
        console.error("=== SUBMISSION ERROR ===", err);
        // Extract useful error info if possible, or just generic
        mt5ShowAlert('An error occurred during secure submission. Please try again.', 'error');
    } finally {
        f.submitBtn.innerHTML = originalHTML;
        mt5UpdateSubmitState();
    }
}
