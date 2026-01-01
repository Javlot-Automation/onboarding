import { t } from './i18n.js';

export function initRiskConfig() {
  const input = document.getElementById("jp-capital-input");
  const resultBox = document.getElementById("jp-result");
  const msg = document.getElementById("jp-message");
  const capitalRangeEl = document.getElementById("jp-capital-range");
  const monthlyFeeEl = document.getElementById("jp-monthly-fee");
  const estimatedEl = document.getElementById("jp-estimated");
  const exposureTextEl = document.getElementById("jp-exposure-text");
  const disclaimerEl = document.getElementById("jp-disclaimer");
  const riskToggle = document.getElementById("jp-risk-toggle");
  const riskToggleBtn = document.getElementById("jp-risk-toggle-btn");
  const riskSection = document.getElementById("jp-risk-section");
  const riskSlider = document.getElementById("jp-risk-slider");
  const riskValueEl = document.getElementById("jp-risk-value");
  const riskBadge = document.getElementById("jp-risk-badge");
  const sliderFill = document.getElementById("jp-slider-fill");
  const sliderThumb = document.getElementById("jp-slider-thumb");
  const sliderWrapper = document.getElementById("jp-slider-wrapper");
  const acknowledgeCheckbox = document.getElementById("jp-acknowledge-checkbox");
  const riskWarning = document.getElementById("jp-risk-warning");
  const warningText = document.getElementById("jp-warning-text");

  let currentCapitalMin = 0;
  const basePerformance = 0.0711;
  let riskPanelOpen = false;

  function formatEuro(value) {
    if (isNaN(value)) return "";
    return value.toLocaleString("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + " €";
  }

  function formatEuroDecimal(value) {
    if (isNaN(value)) return "";
    return value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " €";
  }

  function getRiskMultiplier(riskPercent) {
    if (riskPercent <= 30) {
      return 0.5 + ((riskPercent - 15) / 15) * 0.5;
    } else {
      return 1 + ((riskPercent - 30) / 70) * 2.33;
    }
  }

  function toggleRiskPanel() {
    riskPanelOpen = !riskPanelOpen;

    if (riskPanelOpen) {
      riskToggleBtn.classList.add("jp-active");
      riskSection.classList.add("jp-visible");
      updateToggleBorderColor();
    } else {
      riskToggleBtn.classList.remove("jp-active");
      riskSection.classList.remove("jp-visible");
      riskToggleBtn.style.borderColor = "";
    }
  }

  function updateToggleBorderColor() {
    if (!riskPanelOpen) return;

    const riskPercent = parseInt(riskSlider.value);
    if (riskPercent <= 30) {
      riskToggleBtn.style.borderColor = "";
    } else if (riskPercent <= 60) {
      riskToggleBtn.style.borderColor = "var(--color-yellow)";
    } else {
      riskToggleBtn.style.borderColor = "var(--color-red)";
    }
  }

  function handleAcknowledge() {
    if (acknowledgeCheckbox.checked) {
      sliderWrapper.classList.remove("jp-slider-disabled");
      riskSlider.disabled = false;
    } else {
      sliderWrapper.classList.add("jp-slider-disabled");
      riskSlider.disabled = true;
      riskSlider.value = 30;
      updateRiskUI(30);
    }
    // Update button state in app
    if (window.updateStep8Button) window.updateStep8Button();
  }

  function updateRiskUI(riskPercent) {
    riskValueEl.textContent = riskPercent + "%";
    exposureTextEl.textContent = riskPercent + "%";

    const fillPercent = ((riskPercent - 15) / 85) * 100;
    sliderFill.style.width = fillPercent + "%";
    sliderThumb.style.left = fillPercent + "%";

    // Reset classes
    riskSection.classList.remove("jp-state-green", "jp-state-yellow", "jp-state-red", "jp-border-warning", "jp-border-danger");
    riskBadge.classList.remove("jp-badge-warning", "jp-badge-danger");
    riskWarning.classList.remove("jp-visible", "jp-warning-danger");
    estimatedEl.classList.remove("jp-result-green", "jp-result-yellow", "jp-result-red");

    let stateClass, badgeText, showWarning = false, dangerWarning = false, resultColorClass;

    if (riskPercent <= 30) {
      stateClass = "jp-state-green";
      badgeText = t("recommended");
      resultColorClass = "jp-result-green";
    } else if (riskPercent <= 60) {
      stateClass = "jp-state-yellow";
      badgeText = t("high");
      resultColorClass = "jp-result-yellow";
      riskBadge.classList.add("jp-badge-warning");
      riskSection.classList.add("jp-border-warning");
      showWarning = true;
      if (riskPercent > 50) {
        warningText.textContent = t("warning_50");
      } else {
        warningText.textContent = t("warning_desc");
      }
    } else {
      stateClass = "jp-state-red";
      badgeText = t("extreme");
      resultColorClass = "jp-result-red";
      riskBadge.classList.add("jp-badge-danger");
      riskSection.classList.add("jp-border-danger");
      showWarning = true;
      dangerWarning = true;
      warningText.textContent = t("warning_extreme");
    }

    riskSection.classList.add(stateClass);
    riskBadge.textContent = badgeText;
    estimatedEl.classList.add(resultColorClass);

    if (showWarning) {
      riskWarning.classList.add("jp-visible");
      if (dangerWarning) {
        riskWarning.classList.add("jp-warning-danger");
      }
    }

    updateToggleBorderColor();
    updateEstimatedResult();

    // Trigger button update via window/global function if needed
    if (window.updateStep8Button) window.updateStep8Button();
  }

  function updateEstimatedResult() {
    if (currentCapitalMin <= 0) return;

    const riskPercent = parseInt(riskSlider.value);
    const multiplier = getRiskMultiplier(riskPercent);
    const estimatedMonthly = currentCapitalMin * basePerformance * multiplier;

    estimatedEl.textContent = "+" + formatEuroDecimal(estimatedMonthly) + " /month";
  }

  function updatePricing() {
    let raw = input.value || "";
    raw = raw.replace(/\s/g, "").replace(/,/g, ".");

    if (raw === "") {
      resultBox.classList.remove("jp-visible");
      riskToggle.classList.remove("jp-visible");
      riskSection.classList.remove("jp-visible");
      disclaimerEl.classList.remove("jp-visible");
      riskToggleBtn.classList.remove("jp-active");
      riskToggleBtn.style.borderColor = "";
      riskPanelOpen = false;
      msg.textContent = "";
      currentCapitalMin = 0;
      if (window.updateStep8Button) window.updateStep8Button();
      return;
    }

    const capital = parseFloat(raw);

    if (isNaN(capital) || capital <= 0) {
      resultBox.classList.remove("jp-visible");
      riskToggle.classList.remove("jp-visible");
      riskSection.classList.remove("jp-visible");
      disclaimerEl.classList.remove("jp-visible");
      riskToggleBtn.classList.remove("jp-active");
      riskToggleBtn.style.borderColor = "";
      riskPanelOpen = false;
      msg.textContent = t("error_invalid");
      currentCapitalMin = 0;
      if (window.updateStep8Button) window.updateStep8Button();
      return;
    }

    if (capital < 1000) {
      resultBox.classList.remove("jp-visible");
      riskToggle.classList.remove("jp-visible");
      riskSection.classList.remove("jp-visible");
      disclaimerEl.classList.remove("jp-visible");
      riskToggleBtn.classList.remove("jp-active");
      riskToggleBtn.style.borderColor = "";
      riskPanelOpen = false;
      msg.textContent = t("error_min");
      currentCapitalMin = 0;
      if (window.updateStep8Button) window.updateStep8Button();
      return;
    }

    if (capital > 250000) {
      resultBox.classList.remove("jp-visible");
      riskToggle.classList.remove("jp-visible");
      riskSection.classList.remove("jp-visible");
      disclaimerEl.classList.remove("jp-visible");
      riskToggleBtn.classList.remove("jp-active");
      riskToggleBtn.style.borderColor = "";
      riskPanelOpen = false;
      msg.textContent = t("error_max");
      currentCapitalMin = 0;
      if (window.updateStep8Button) window.updateStep8Button();
      return;
    }

    let tier = Math.floor(capital / 1000);
    if (tier < 1) tier = 1;
    if (tier > 250) tier = 250;

    const capitalMin = tier * 1000;
    const capitalMax = capitalMin + 999;
    const monthlyFee = 19.90 + (tier - 1) * 20;

    currentCapitalMin = capitalMin;

    capitalRangeEl.textContent = formatEuro(capitalMin) + " – " + formatEuro(capitalMax);
    monthlyFeeEl.textContent = formatEuroDecimal(monthlyFee) + " /month";

    resultBox.classList.add("jp-visible");
    riskToggle.classList.add("jp-visible");
    disclaimerEl.classList.add("jp-visible");
    msg.textContent = "";

    updateRiskUI(parseInt(riskSlider.value));
    if (window.updateStep8Button) window.updateStep8Button();
  }

  // Event listeners
  if (input) {
    input.addEventListener("input", updatePricing);
    input.value = "10000";
    updatePricing();
  }

  if (riskToggleBtn) {
    riskToggleBtn.addEventListener("click", toggleRiskPanel);
  }

  if (acknowledgeCheckbox) {
    acknowledgeCheckbox.addEventListener("change", handleAcknowledge);
  }

  if (riskSlider) {
    riskSlider.addEventListener("input", function () {
      updateRiskUI(parseInt(this.value));
    });
    updateRiskUI(30);
  }
}

export function isRiskConfigValid() {
  const input = document.getElementById("jp-capital-input");
  if (!input) return false;

  const raw = input.value.replace(/\s/g, "").replace(/,/g, ".");
  const capital = parseFloat(raw);

  // Basic constraints
  const validCapital = !isNaN(capital) && capital >= 1000 && capital <= 250000;

  // Also check if result box is visible, implying calculations are valid
  const resultBox = document.getElementById("jp-result");
  const isResultVisible = resultBox && resultBox.classList.contains("jp-visible");

  return validCapital && isResultVisible;
}
