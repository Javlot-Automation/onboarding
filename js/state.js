// Global Application State matching index_backup.html

export const state = {
    currentStep: 0, // Start at welcome cover
    totalSteps: 9, // 9 actual steps (1-9)
    selectedBroker: null,
    previousStep: 0,
    currentLang: 'en', // Default language

    // Navigation and Animation state
    navDirection: null,

    // Step-specific Button References (to be populated by UI)
    step1ContinueBtn: null,
    step2ContinueBtn: null,
    step4ContinueBtn: null,
    step5ContinueBtn: null,
    step6ContinueBtn: null, // Shared with MetaTrader
    step7ContinueBtn: null, // Shared with Verification

    // Step 4 (Deposit) substeps
    depositSubStep: 1,
    depositDirection: null,

    // Step 6 (MetaTrader) substeps
    MetaTraderSubStep: 1,
    MetaTraderDirection: null,

    // Step 7 (Verification trade) substeps
    verificationSubStep: 1,
    verificationDirection: null,

    // Broker Specific Sub-steps & Directions

    // Vantage
    vantageSubStep: 1,
    vantageContinueBtn: null,
    vantageDirection: null,

    // Bullwaves
    bullwavesSubStep: 1,
    bullwavesContinueBtn: null,
    bullwavesDirection: null,

    // PU Prime
    puprimeSubStep: 1,
    puprimeContinueBtn: null,
    puprimeDirection: null,

    // Axi
    axiSubStep: 1,
    axiContinueBtn: null,
    axiDirection: null,

    // Startrader
    startraderSubStep: 1,
    startraderContinueBtn: null,
    startraderDirection: null,

    // VT Markets
    vtmarketsSubStep: 1,
    vtmarketsContinueBtn: null,
    vtmarketsDirection: null,

    // Step 8 Risk Level Persistence
    riskLevel: 30
};

// Startrader & VT Markets specific warning is handled in i18n but logic might need these keys
