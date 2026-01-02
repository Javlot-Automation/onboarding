export function initRiskConfig() {
  var input = document.getElementById("jp-capital-input");
  var resultBox = document.getElementById("jp-result");
  var msg = document.getElementById("jp-message");
  var capitalRangeEl = document.getElementById("jp-capital-range");
  var monthlyFeeEl = document.getElementById("jp-monthly-fee");
  var estimatedEl = document.getElementById("jp-estimated");
  var exposureTextEl = document.getElementById("jp-exposure-text");
  var disclaimerEl = document.getElementById("jp-disclaimer");
  var riskToggle = document.getElementById("jp-risk-toggle");
  var riskToggleBtn = document.getElementById("jp-risk-toggle-btn");
  var riskSection = document.getElementById("jp-risk-section");
  var riskSlider = document.getElementById("jp-risk-slider");
  var riskValueEl = document.getElementById("jp-risk-value");
  var riskBadge = document.getElementById("jp-risk-badge");
  var sliderFill = document.getElementById("jp-slider-fill");
  var sliderThumb = document.getElementById("jp-slider-thumb");
  var sliderWrapper = document.getElementById("jp-slider-wrapper");
  var acknowledgeCheckbox = document.getElementById("jp-acknowledge-checkbox");
  var riskWarning = document.getElementById("jp-risk-warning");
  var warningText = document.getElementById("jp-warning-text");

  var currentCapitalMin = 0;
  var basePerformance = 0.0711;
  var riskPanelOpen = false;

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

    var riskPercent = parseInt(riskSlider.value);
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
    // Update button state (integration point)
    if (window.updateStep8Button) window.updateStep8Button();
  }

  function updateRiskUI(riskPercent) {
    riskValueEl.textContent = riskPercent + "%";
    exposureTextEl.textContent = riskPercent + "%";

    var fillPercent = ((riskPercent - 15) / 85) * 100;
    sliderFill.style.width = fillPercent + "%";
    sliderThumb.style.left = fillPercent + "%";

    // Reset classes
    riskSection.classList.remove("jp-state-green", "jp-state-yellow", "jp-state-red", "jp-border-warning", "jp-border-danger");
    riskBadge.classList.remove("jp-badge-warning", "jp-badge-danger");
    riskWarning.classList.remove("jp-visible", "jp-warning-danger");
    estimatedEl.classList.remove("jp-result-green", "jp-result-yellow", "jp-result-red");

    var stateClass, badgeTextKey, showWarning = false, dangerWarning = false, resultColorClass;
    var warningTextKey = "";

    // Determine State
    if (riskPercent <= 30) {
      stateClass = "jp-state-green";
      badgeTextKey = "risk_badge_recommended";
      resultColorClass = "jp-result-green";
    } else if (riskPercent <= 60) {
      stateClass = "jp-state-yellow";
      badgeTextKey = "risk_badge_high";
      resultColorClass = "jp-result-yellow";
      riskBadge.classList.add("jp-badge-warning");
      riskSection.classList.add("jp-border-warning");
      showWarning = true;
      if (riskPercent > 50) {
        warningTextKey = "warning_50";
      } else {
        warningTextKey = "warning_desc";
      }
    } else {
      stateClass = "jp-state-red";
      badgeTextKey = "risk_badge_extreme";
      resultColorClass = "jp-result-red";
      riskBadge.classList.add("jp-badge-danger");
      riskSection.classList.add("jp-border-danger");
      showWarning = true;
      dangerWarning = true;
      warningTextKey = "warning_extreme";
    }

    // Apply basic classes
    riskSection.classList.add(stateClass);
    estimatedEl.classList.add(resultColorClass);

    // Apply Translations
    if (window.t) {
      riskBadge.textContent = window.t(badgeTextKey);
      if (showWarning && warningTextKey) {
        warningText.textContent = window.t(warningTextKey);
      }
    }

    if (showWarning) {
      riskWarning.classList.add("jp-visible");
      if (dangerWarning) {
        riskWarning.classList.add("jp-warning-danger");
      }
    }

    updateToggleBorderColor();
    updateEstimatedResult();

    // Update Legend Highlight & Colors
    var legendItems = document.querySelectorAll(".legend-item");
    legendItems.forEach(item => {
      item.classList.remove("active", "active-blue", "active-green", "active-orange", "active-red");
    });

    var activeLevel = 70;
    var activeColorClass = "active-red";

    if (riskPercent <= 15) {
      activeLevel = 15;
      activeColorClass = "active-blue";
    }
    else if (riskPercent <= 30) {
      activeLevel = 30;
      activeColorClass = "active-green";
    }
    else if (riskPercent <= 50) {
      activeLevel = 50;
      activeColorClass = "active-orange";
    }

    var activeItem = document.querySelector(`.legend-item[data-level="${activeLevel}"]`);
    if (activeItem) {
      activeItem.classList.add("active");
      activeItem.classList.add(activeColorClass);
    }

    // Integration point
    if (window.updateStep8Button) window.updateStep8Button();
  }

  function updateEstimatedResult() {
    if (currentCapitalMin <= 0) return;

    var riskPercent = parseInt(riskSlider.value);
    var multiplier = getRiskMultiplier(riskPercent);
    var estimatedMonthly = currentCapitalMin * basePerformance * multiplier;

    estimatedEl.textContent = "+" + formatEuroDecimal(estimatedMonthly) + " /month";
  }

  function updatePricing() {
    var raw = input.value || "";
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

    var capital = parseFloat(raw);

    if (isNaN(capital) || capital <= 0) {
      resultBox.classList.remove("jp-visible");
      riskToggle.classList.remove("jp-visible");
      riskSection.classList.remove("jp-visible");
      disclaimerEl.classList.remove("jp-visible");
      riskToggleBtn.classList.remove("jp-active");
      riskToggleBtn.style.borderColor = "";
      riskPanelOpen = false;
      msg.textContent = "Please enter a valid amount.";
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
      msg.textContent = "Minimum capital: 1 000 €";
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
      msg.textContent = "Contact us for amounts above 250 000 €";
      currentCapitalMin = 0;
      if (window.updateStep8Button) window.updateStep8Button();
      return;
    }

    var tier = Math.floor(capital / 1000);
    if (tier < 1) tier = 1;
    if (tier > 250) tier = 250;

    var capitalMin = tier * 1000;
    var capitalMax = capitalMin + 999;
    var monthlyFee = 19.90 + (tier - 1) * 20;

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
  var input = document.getElementById("jp-capital-input");
  if (!input) return false;

  var raw = input.value.replace(/\s/g, "").replace(/,/g, ".");
  var capital = parseFloat(raw);

  // Basic constraints
  var validCapital = !isNaN(capital) && capital >= 1000 && capital <= 250000;

  // Also check if result box is visible, implying calculations are valid
  var resultBox = document.getElementById("jp-result");
  var isResultVisible = resultBox && resultBox.classList.contains("jp-visible");

  return validCapital && isResultVisible;
}
