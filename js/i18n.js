import { state } from './state.js';

export const translations = {
    en: {
        // ===== WELCOME PAGE =====
        welcome_title: "Payment Confirmed!",
        welcome_subtitle: "Your 14-day free trial is now active. Complete the onboarding below to activate your services.",
        welcome_duration_label: "Estimated duration",
        welcome_duration_value: "Less than 10 minutes",
        welcome_email_label: "Confirmation email",
        welcome_email_value: "Sent to your inbox",
        welcome_access_label: "Onboarding access",
        welcome_access_value: "Available anytime via your email",
        welcome_need_help: "Need help? Contact us",
        welcome_start_btn: "Start Onboarding",

        // ===== COMMON =====
        need_help: "Need Help?",
        btn_continue: "Continue",
        btn_back: "Back",
        btn_setup_account: "Setup my account",
        checkbox_completed: "I have completed this step",

        // ===== SIDEBAR =====
        sidebar_step1: "Quick Intro",
        sidebar_step1_sub: "Read & confirm",
        sidebar_step2: "Broker Selection",
        sidebar_step2_sub: "Choose your broker",
        sidebar_step3: "Broker Account Setup",
        sidebar_step3_sub: "Follow the steps",
        sidebar_step4: "Initial Deposit",
        sidebar_step4_sub: "Important info",
        sidebar_step5: "MetaTrader 5",
        sidebar_step5_sub: "Install the app",
        sidebar_step6: "MetaTrader Setup",
        sidebar_step6_sub: "Connect MT5",
        sidebar_step7: "Verification Trade",
        sidebar_step7_sub: "Validate account",
        sidebar_step8: "Connect to Javlot",
        sidebar_step8_sub: "Secure setup",

        // ===== STEP 1 =====
        step1_title: "Quick Intro",
        step1_description: "Please take a moment to read our disclaimer. It helps ensure everything runs smoothly and delivers the best possible experience on your side.",
        step1_info_box: `<p style="margin-bottom: 20px;">To ensure a smooth and successful activation of your service, it is essential that you <span style="font-weight: 600;">carefully read every step of the onboarding process.</span> Missing or skipping a step will <span style="font-weight: 600;">prevent your account from being linked correctly</span>, and in that case, your service cannot be activated.</p><p style="margin-bottom: 20px;">Before going any further, if you haven't already, we strongly recommend reading the <span style="font-weight: 600;">Features</span> section of our website.<br>It explains in detail <span style="font-weight: 600;">how the bot works, how trades are executed, and how risk management is handled.</span><br>This will help you understand what to expect, especially during periods where the bot may choose <span style="font-weight: 600;">not to trade for several days</span>.</p><p style="margin-bottom: 20px;">This behavior is <span style="font-weight: 600;">intentional</span> and part of its risk-control logic — not a malfunction. Our goal is to ensure that you fully understand: how the system operates, what the bot does and doesn't do, how trades may vary depending on market conditions, and what you should expect once your account is live.</p><p style="margin-bottom: 0;">If you have any question please read our <span style="font-weight: 600;">FAQ</span>, if you don't find an answer our <span style="font-weight: 600;">support</span> is here to help.</p>`,
        step1_checkbox: "I confirm that I have read and understood all the information above",

        // ===== STEP 2 =====
        step2_title: "Broker Selection",
        step2_description: "Create your broker account with one of our six partners. Once your account is created, select your broker below to continue.",
        step2_badge_recommended: "Recommended",
        step2_badge_vpn: "VPN Required",
        step2_note: `Please make sure to create your account using the button above and <strong>leave the "Referral" field empty.</strong> This ensures that your MT5 account can be correctly linked to our bot signals. If you already have an existing account with one of our broker partners, <strong>it unfortunately cannot be connected to our system.</strong> In that case, simply create a new account with another broker to access our services.`,

        // ===== STEP 3 - TITLES =====
        step3_title: "Broker Account Setup",

        // ===== STEP 3 - VANTAGE =====
        vantage_desc_1: "Verify your identity to unlock your deposit and withdrawal limits.",
        vantage_desc_2: "Create your MetaTrader 5 trading account on Vantage Markets.",
        vantage_desc_3: "Configure your MT5 account with the correct settings for Javlot.",
        vantage_desc_4: "Confirm that your MT5 trading account is created and ready for deposits.",
        vantage_3_1_content: `<p style="margin-bottom: 16px;">Once your Vantage Markets account is created, you will need to verify your email address, your phone number, and your ID card. After completing these steps, you will unlock the deposit and withdrawal limit of <strong>$50,000/day</strong>.</p><p style="margin-bottom: 16px;">If you plan to invest more than <strong>$50,000</strong>, you will also need to verify your residential address in order to increase your limit up to <strong>$10,000,000/day</strong>.</p>`,
        vantage_3_2_content: `Once you have completed the KYC (Know Your Customer) process, you will be able to create your MetaTrader 5 account. Simply click on the <strong>"Open Account"</strong> button to get started.`,
        vantage_3_3_content: `<p style="margin-bottom: 12px;">Choose A Trading Platform: <strong>Recommended – MetaTrader 5</strong><br>Choose An Account Type: <strong>RAW ECN</strong><br>Choose An Account Currency: <strong>EUR is mandatory.</strong></p><p style="margin-bottom: 12px;">By ticking the box: make sure to read the user compliance before creating your account.</p><p style="margin-bottom: 16px;">Submit: once you are ready and have double checked your selections, click on <strong>Submit</strong> to create your MT5 account.</p>`,
        vantage_3_4_content: `Congratulations, your MT5 account is created. You can now head to <strong>Step 4: Make your first deposit.</strong>`,
        vantage_checkbox_1: "I have completed this step",
        vantage_checkbox_3: "I used the information above to open my account",
        vantage_checkbox_4: "My trading account is created",

        // ===== STEP 3 - BULLWAVES =====
        bullwaves_desc_1: "Create your Bullwaves trading account with the right currency and MT5 password.",
        bullwaves_desc_2: "Confirm that your Bullwaves dashboard matches the required platform, type and leverage.",
        bullwaves_3_1_content: `<p style="margin-bottom: 16px;">Bullwaves offers a smooth and straightforward onboarding experience. Simply enter your personal information, and your MT5 account will be created instantly. The only setting you need to review is your account currency.</p><p style="margin-bottom: 16px;">We recommend choosing <strong>EUR</strong>, although it is not mandatory. Also choose your password with care since it will also be your <strong>MT5 Account Password</strong>.</p>`,
        bullwaves_3_2_content: `Arriving on this dashboard confirms that your broker account is fully set up. Please verify that your platform, account type, and leverage settings are identical to the example below <strong>(MT5, Live &amp; 500)</strong>.`,
        bullwaves_checkbox_1: "I entered the right MetaTrader setup informations",
        bullwaves_checkbox_2: "My account is correctly setup",

        // ===== STEP 3 - PU PRIME =====
        puprime_desc_1: "Enter your personal details, then prepare your trading account setup.",
        puprime_desc_2: "Configure your MT5 trading account with the recommended settings for Javlot.",
        puprime_desc_3: "Complete your KYC process and confirm that your profile is fully verified.",
        puprime_3_1_content: `Once your PU Prime account is created, you will need to enter your personal details. After clicking <strong>"Next"</strong>, you will be prompted to set up your trading account.`,
        puprime_3_2_content: `<p style="margin-bottom: 12px;">Choose Trading Platform: <strong>Recommended – MetaTrader 5</strong><br>Choose Account Type: <strong>Standard</strong><br>Choose Leverage: <strong>500:1</strong><br>Choose Account Currency: <strong>EUR</strong></p><p style="margin-bottom: 16px;">Once you are ready, click on <strong>"Next"</strong> to proceed to the KYC section.</p>`,
        puprime_3_3_content: `<p style="margin-bottom: 16px;">Now, you need to upload your ID card or passport. Once approved, your profile will display a <strong>"Verified"</strong> badge on your KYC status.</p><p style="margin-bottom: 16px;">This step is mandatory to unlock full trading features and deposit/withdrawal access.</p>`,
        puprime_checkbox_1: "I have completed this step",
        puprime_checkbox_2: "I used the information above to setup my account",
        puprime_checkbox_3: "My profile is verified",

        // ===== STEP 3 - AXI =====
        axi_desc_1: "Resume your application and get ready to configure your trading account.",
        axi_desc_2: "Configure your Axi MT5 trading account with the correct platform and account type.",
        axi_desc_3: "Set up your account currency and leverage before finalizing.",
        axi_desc_4: "Confirm that your Axi dashboard and trading account are ready.",
        axi_3_1_content: `After creating your Axi account, you'll arrive on this page. Simply click <strong>"Resume Application"</strong> to complete your trading account setup.`,
        axi_3_2_content: `<p style="margin-bottom: 12px;">After entering your personal information, you will reach the <strong>"Set up your new account"</strong> page. Make sure to configure your account using the details shown below:</p><p style="margin-bottom: 12px;">Trading Platform : <strong>MetaTrader 5</strong><br>Account Type : <strong>PRO</strong><br>Join Axi Selection : <strong>Optional</strong></p><p style="margin-bottom: 16px;">Once you are ready, click on <strong>"Next"</strong> to proceed to the account currency and leverage setup.</p>`,
        axi_3_3_content: `<p style="margin-bottom: 12px;">On this page, select the following settings:</p><p style="margin-bottom: 12px;">Account Currency : <strong>EUR</strong><br>Leverage : <strong>500:1</strong></p><p style="margin-bottom: 16px;">Then click <strong>"Next"</strong> to complete your trading account configuration.</p>`,
        axi_3_4_content: `<p style="margin-bottom: 16px;">Congratulations! Your Axi MT5 trading account is now created. You should see a screen similar to the one below.</p><p style="margin-bottom: 16px;">You can now proceed to the next step to make your first deposit.</p>`,
        axi_checkbox_2: "I used the information above to setup my account",
        axi_checkbox_3: "I configured my account currency and leverage",
        axi_checkbox_4: "My trading account is created",

        // ===== STEP 3 - STARTRADER =====
        startrader_desc_1: "Understand VPN requirements and complete your personal details on Startrader.",
        startrader_desc_2: "Configure your Startrader MT5 account with the recommended settings.",
        startrader_desc_3: "Complete your KYC process and confirm your identity is verified.",
        startrader_warning: `<p style="margin-bottom: 12px;">Startrader is restricted in some regions (France, European Union, United States, Singapore, India, and Russia). If you reside in one of these locations, you may technically be able to access their services using a VPN.</p><p style="margin-bottom: 0;">While this is not illegal for you as a customer, we recommend choosing another broker to ensure full compliance and avoid any potential limitations.</p>`,
        startrader_3_1_content: `Once your Startrader account is created, you will be asked to enter your personal details. Once completed, click on the <strong>"Next"</strong> button.`,
        startrader_3_2_content: `<p style="margin-bottom: 12px;">On this page, configure your trading account with the following settings:</p><p style="margin-bottom: 12px;">Trading Platform : <strong>MetaTrader 5</strong><br>Account Type : <strong>Standard</strong><br>Account Currency : <strong>EUR</strong><br>Leverage : <strong>500:1</strong></p><p style="margin-bottom: 16px;">Once you are ready, click <strong>"Done"</strong> to complete your trading account configuration.</p>`,
        startrader_3_3_content: `<p style="margin-bottom: 16px;">Finally, you will need to verify your identity by uploading your ID card or passport. Once approved, your profile will display a <strong>"Verified"</strong> status.</p><p style="margin-bottom: 16px;">This step is mandatory to unlock full trading features and deposit/withdrawal access.</p>`,
        startrader_checkbox_2: "I used the information above to setup my account",
        startrader_checkbox_3: "My profile is verified",

        // ===== STEP 3 - VT MARKETS =====
        vtmarkets_desc_1: "Complete your VT Markets profile verification before creating your MT5 account.",
        vtmarkets_desc_2: "Create your MetaTrader 5 account with the correct platform, type and currency.",
        vtmarkets_desc_3: "Complete the second part of the KYC to unlock trading features.",
        vtmarkets_desc_4: "Confirm your VT Markets profile is verified and ready for the next step.",
        vtmarkets_warning: `<p style="margin-bottom: 12px;">VT Markets is restricted in some regions (France, European Union, United States, Singapore, India, and Russia). If you reside in one of these locations, you may technically be able to access their services using a VPN.</p><p style="margin-bottom: 0;">While this is not illegal for you as a customer, we recommend choosing another broker to ensure full compliance and avoid any potential limitations.</p>`,
        vtmarkets_3_1_content: `<p style="margin-bottom: 16px;">Once your VT Markets account is created, you must verify your personal information, your phone number, and your email address. After completing these steps, you will be able to create your MT5 account.</p><p style="margin-bottom: 16px;">On VT Markets, you are not required to verify your residential address; they will only request additional information if they detect any suspicious activity on your account.</p>`,
        vtmarkets_3_2_content: `<p style="margin-bottom: 12px;">Now, go to the <strong>"Accounts"</strong> section and click on <strong>"Open Trading Account"</strong>. Configure your account with the following settings:</p><p style="margin-bottom: 12px;">Platform : <strong>MetaTrader 5</strong><br>Account Type : <strong>Standard STP</strong><br>Leverage : <strong>500:1</strong><br>Currency : <strong>EUR</strong></p><p style="margin-bottom: 16px;">Once done, click <strong>"Open an Account"</strong> to create your MT5 trading account.</p>`,
        vtmarkets_3_3_content: `<p style="margin-bottom: 16px;">Now, complete the KYC process by uploading your ID document. Once approved, your profile will show a <strong>"Verified"</strong> badge.</p><p style="margin-bottom: 16px;">This step is mandatory to unlock full trading features and deposit/withdrawal access.</p>`,
        vtmarkets_3_4_content: `<p style="margin-bottom: 16px;">Congratulations! Your VT Markets MT5 trading account is now created and verified. You should see a status similar to the one below.</p><p style="margin-bottom: 16px;">You can now proceed to the next step to make your first deposit.</p>`,
        vtmarkets_checkbox_1: "I have completed this step",
        vtmarkets_checkbox_2: "I created my MT5 account with the correct settings",
        vtmarkets_checkbox_3: "My profile is verified",
        vtmarkets_checkbox_4: "My trading account is ready",

        // ===== STEP 4 =====
        step4_title: "Initial Deposit",
        deposit_desc_1: "Important information before making your first deposit.",
        deposit_desc_2_bullwaves: "Fund your Bullwaves trading account from your dashboard.",
        deposit_desc_2_puprime: "Open the Funds tab and enter your initial deposit amount.",
        deposit_desc_2_axi: "Open the Fund menu, choose your funding method and proceed to your deposit amount.",
        deposit_desc_2_startrader: "Select your newly created account and enter at least €1,000 to start funding your Startrader account.",
        deposit_desc_2_vantage: "Open the deposit menu on your broker dashboard to fund your MT5 account.",
        deposit_desc_2_vtmarkets: "Select your newly created account and enter at least €1,000 to start funding.",
        deposit_desc_3_puprime: "Choose your payment method and confirm your deposit.",
        deposit_desc_3_axi: "Confirm your deposit amount and complete the funding process.",
        deposit_desc_3_startrader: "Select your preferred payment method to proceed with account funding.",
        deposit_desc_3_vtmarkets: "Confirm that your VT Markets account is funded and ready.",
        deposit_desc_3_vantage: "Verify the right account is selected and enter your initial deposit amount.",
        deposit_desc_4_vantage: "Choose your payment method and confirm once your account is funded.",
        step4_info_box: `<p style="margin-bottom: 14px; font-weight: 700; color: #000000;">Important – Initial Deposit Instructions</p><p style="margin-bottom: 14px;">To activate your access on the broker side, a first deposit of <strong>exactly €1,000</strong> is required.</p><p style="margin-bottom: 14px;">Please note that there is no benefit in depositing more than <strong>€1,000</strong> at this stage. On the contrary, we strongly recommend not exceeding this amount for now.</p><p style="margin-bottom: 12px; font-weight: 600; color: #000000;">Here is why:</p><p style="margin-bottom: 14px;">The next step of the onboarding process (Step 7) includes a mandatory verification trade required by the broker as part of their anti-bot and account validation procedure. This trade must be placed with a lot size of <strong>1</strong>, which is unusually high for an initial setup.</p><p style="margin-bottom: 14px;">Because of this, depositing more than <strong>€1,000</strong> at this stage would only increase unnecessary exposure, without providing any advantage.</p><p style="margin-bottom: 12px; font-weight: 600; color: #000000;">Rest assured:</p><ul style="margin: 0 0 14px 20px; padding: 0; color: #4B5563;"><li style="margin-bottom: 8px;">This verification step is standard and temporary</li><li style="margin-bottom: 8px;">We will guide you step by step through the process</li><li style="margin-bottom: 8px;">You will receive clear best practices to execute this trade safely</li><li style="margin-bottom: 8px;">There is no need to stress – the goal is validation, not performance</li></ul><p style="margin: 0;">Once this step is completed, your account will be fully validated and ready to operate under normal conditions.</p>`,
        step4_checkbox_1: "I understand that a deposit of 1,000€ (or equivalent) is required to activate my broker account",
        step4_checkbox_2: "I understand that depositing more than €1,000 at this stage is not recommended and that I will be able to fund my account properly after Step 7 is completed",

        // ===== STEP 5 =====
        step5_title: "MetaTrader 5",
        step5_description: `Download MetaTrader 5 on your smartphone to manage your account and follow the next steps. You can also search for <strong>"MetaTrader 5"</strong> directly on the App Store (iOS) or Play Store (Android).`,
        step5_ios: "Download for iOS",
        step5_android: "Download for Android",
        step5_app_store: "App Store",
        step5_play_store: "Play Store",
        step5_checkbox: "I confirm that I have downloaded and installed MetaTrader 5 on my device",
        step5_note: "If the download links do not open correctly, simply search for <strong>MetaTrader 5</strong> in your store and install the official app.",

        // ===== STEP 6 =====
        step6_title: "MetaTrader Setup",
        mt_desc_1: "Get your MetaTrader 5 credentials from your email inbox.",
        mt_desc_2: "Log into your trading account on the MetaTrader 5 mobile app.",
        mt_desc_3: "Add the required trading quotes for your broker.",
        mt_desc_4: "Final confirmation before the anti-bot validation procedure.",
        step6_1_content: `<p class="step-description" style="margin-bottom: 14px;">Now that you have created and funded your MetaTrader 5 account, you will need your login credentials. These are always sent to your email inbox by your selected broker.</p><p class="step-description" style="margin-top: 0;">To help you find them, you can search for <strong>'MT5 Account'</strong> in your mailbox. Also make sure to check your spam folder. The email should look similar to the example shown below.</p>`,
        step6_1_note: "<strong>Note:</strong> Bullwaves users: your MT5 account password is the same as your Bullwaves account password.",
        step6_1_checkbox: "I confirm that I have successfully located my MetaTrader 5 login credentials.",
        step6_2_content: `Open the MetaTrader 5 app, then tap on <strong>"Settings"</strong> at the bottom right, then <strong>"New Account"</strong>. Search for your broker's name in the search bar. Select the <strong>live server</strong> that matches the one written in your credentials email (not a demo server). Finally, enter your <strong>Login</strong> and <strong>Password</strong> from your email.`,
        step6_2_checkbox: "I confirm that I am logged into my MetaTrader 5 account.",
        step6_3_content: `Now go to the <strong>"Quotes"</strong> tab at the bottom of the app, and tap the <strong>"+"</strong> icon at the top right. Add the EURUSD quote corresponding to your broker by searching and tapping on it. The correct quote for your broker is displayed in the image below.`,
        step6_3_checkbox: "I confirm that I have added the correct EURUSD quote for my broker.",
        step6_4_warning: `<strong>Important:</strong> Do not proceed if the current time falls within the New York session hours (<span class="ny-hours-local"></span>). Wait until the session is closed before continuing.`,
        step6_4_checkbox: "I confirm that I am outside the New York trading session hours.",
        step6_4_desc: "Your trading account is fully setup and ready for the anti-bot validation procedure.",

        // ===== STEP 7 =====
        step7_title: "Account Verification Trade",
        verif_desc_1: "Set up your verification trade in MetaTrader 5.",
        verif_desc_2: "Execute the trade safely and validate your account.",
        step7_1_content: `You will now need to set up the account verification trade.<br>Go to the 'Trade' section in your MetaTrader 5 application and tap the '+' button. You will then be able to modify your trade settings.<br><br>Set the trading pair to EURUSD, corresponding to the quote you added in the previous step (refer to the image to confirm the EURUSD quote linked to your broker).<br>Make sure to enter a lot size of 1.00. This is mandatory, and the verification will fail if a different lot size is used.`,
        step7_1_checkbox_1: "I confirm that I am using the correct trading pair for my selected broker",
        step7_1_checkbox_2: "I confirm that I am using a lot size of 1.00",
        step7_1_checkbox_3: "I confirm that I am outside of the New York trading session",
        step7_2_warning: `<strong>Before proceeding with any action, please read this entire step carefully.</strong>`,
        step7_2_content: `Once you have confirmed the above, proceed with the trade by pressing either <strong>"Sell by Market"</strong> or <strong>"Buy by Market"</strong>.<br><br>Once the trade is executed, wait at least 15 seconds, then close it. The position must remain open for <strong>at least 15 seconds</strong>, or the broker verification will fail.<br><br>After closing, you may see a small negative balance in your account. This is completely normal and expected as part of the verification process.`,
        step7_2_checkbox_1: "I confirm that I have executed and closed the verification trade",
        step7_2_checkbox_2: "I confirm that my account is now ready to be connected to Javlot",

        // ===== STEP 8 =====
        step8_title: "Connect to Javlot",
        step8_description: "Enter your MetaTrader 5 credentials to securely link your trading account to the service.",
        step8_email_label: "Email Address (used for Stripe billing)",
        step8_email_placeholder: "Email address",
        step8_account_label: "MT5 Account Number",
        step8_account_placeholder: "Enter MT5 account number",
        step8_password_label: "MT5 Account Password",
        step8_password_placeholder: "Enter MT5 password",
        step8_server_label: "MT5 Server",
        step8_server_placeholder: "Enter MT5 server",
        step8_checkbox_1: "I confirm that all informations I entered are correct.",
        step8_checkbox_2: "I understand that my credentials are processed securely and only used to link my MT5 account to the service.",
        step8_info_1: "Please double-check all information before submitting. Incorrect details will prevent us from linking your MT5 account to the service. Your MT5 credentials are highly sensitive. Never share them outside of this secured setup process. The Javlot team will never request your login details directly.",
        step8_info_2: "This form is encrypted, processed automatically, and used exclusively to connect your trading account to the service. Your credentials are not stored, not accessible to our team, and not retained once the automated setup is completed.",

        // ===== STEP 3 ADDITIONAL =====
        puprime_3_1_content: `Once your PU Prime account is created, you will need to enter your personal details. After clicking <strong>"Next"</strong>, you will be prompted to set up your trading account.`,
        puprime_3_2_content: `<p style="margin-bottom: 12px;">Choose Trading Platform: <strong>Recommended – MetaTrader 5</strong><br>Choose Account Type: <strong>Standard</strong><br>Choose An Account Currency: <strong>EUR is recommended.</strong></p><p style="margin-bottom: 12px;">By ticking the box: make sure to read the user compliance before creating your account.</p><p style="margin-bottom: 16px;"><strong>Next:</strong> once you are ready and have double checked your selections, click on <strong>"Next"</strong> to create your MT5 account.</p>`,
        puprime_3_3_content: `You will now be asked to complete the KYC (Know Your Customer) process. Once it's done, you should arrive on the page shown below.`,
        puprime_checkbox_2: "I confirm that I entered the informations above to create my MetaTrader account",
        puprime_checkbox_3: "My account is created and my profile is verified",

        axi_3_1_content: `After creating your Axi account, you'll arrive on this page. Simply click <strong>"Resume Application"</strong> to complete your trading account setup.`,
        axi_3_2_content: `<p style="margin-bottom: 12px;">After entering your personal information, you will reach the <strong>"Set up your new account"</strong> page. Make sure to configure your account using the details shown below:</p><p style="margin-bottom: 12px;">Trading Platform : <strong>MetaTrader 5</strong><br>Account Type : <strong>PRO</strong><br>Join Axi Selection : <strong>Optional</strong></p><p style="margin-bottom: 16px;">Create Account : Once you are ready and have double checked your selections, click on <strong>"Create Account"</strong>.</p>`,
        axi_3_3_content: `<p style="margin-bottom: 12px;">After completing the KYC (Know Your Customer) process, you will arrive on the <strong>"Setup your account"</strong> page. Make sure to setup your account with the information below:</p><p style="margin-bottom: 12px;">Account currency : <strong>EUR Recommended</strong><br>Leverage : <strong>1:500</strong></p><p style="margin-bottom: 16px;">Continue : Once you are ready and have double checked your selections, click on <strong>"Continue"</strong>.</p>`,
        axi_3_4_content: `Congratulations! You've now reached your dashboard and your trading account is ready.`,
        axi_checkbox_2: "I confirm that I entered the informations above to create my MetaTrader account",
        axi_checkbox_3: "I confirm that I entered the informations above to setup my account",

        startrader_warning: `<p style="margin-bottom: 12px;">Startrader is restricted in some regions (France, European Union, United States, Singapore, India, and Russia). If you reside in one of these locations, you may technically be able to access their services using a VPN.</p><p style="margin-bottom: 0;">While this is not illegal for you as a customer, we recommend choosing another broker to ensure full compliance and avoid any potential limitations.</p>`,
        startrader_3_1_content: `Once your Startrader account is created, you will be asked to enter your personal details. Once completed, click on the <strong>"Next"</strong> button.`,
        startrader_3_2_content: `<p style="margin-bottom: 12px;">Choose Trading Platform : <strong>Recommended – MetaTrader 5</strong><br>Choose Account Type : <strong>RAW ECN</strong><br>Choose Account Currency : <strong>EUR is recommended.</strong></p><p style="margin-bottom: 12px;">By ticking the box : make sure to read Terms and Conditions.</p><p style="margin-bottom: 16px;"><strong>Next :</strong> Once you are ready and have double checked your selections, click on the <strong>"Next"</strong> button.</p>`,
        startrader_3_3_content: `After completing the <strong>"Account Configuration"</strong> section, you will be asked to complete the KYC (Know Your Customer) process. Once your identity is verified, you will see the confirmation message shown below.`,
        startrader_checkbox_1: "I understand that this broker may require a VPN",
        startrader_checkbox_2: "I confirm that I entered the information above to setup my account",
        startrader_checkbox_3: "My account is created and my identy verified",

        vtmarkets_warning: `<p style="margin-bottom: 12px;">VT Markets is restricted in some regions (France, European Union, United States, Singapore, India, and Russia). If you reside in one of these locations, you may technically be able to access their services using a VPN.</p><p style="margin-bottom: 0;">While this is not illegal for you as a customer, we recommend choosing another broker to ensure full compliance and avoid any potential limitations.</p>`,
        vtmarkets_3_1_content: `<p style="margin-bottom: 16px;">Once your VT Markets account is created, you must verify your personal information, your phone number, and your email address. After completing these steps, you will be able to create your MT5 account.</p><p style="margin-bottom: 16px;">On VT Markets, you are not required to verify your residential address; they will only request additional information if they detect any suspicious activity on your account.</p>`,
        vtmarkets_3_2_content: `<p style="margin-bottom: 16px;">Once you have completed the <strong>"Personal information"</strong> form, you will be able to create your MetaTrader 5 account.</p><p style="margin-bottom: 12px;">Choose Trading Platform: <strong>MetaTrader 5</strong><br>Choose Account Type: <strong>Standard STP</strong><br>Choose An Account Currency: <strong>EUR is recommended.</strong></p><p style="margin-bottom: 12px;">Tick the box: make sure to read the user compliance before creating your account.</p><p style="margin-bottom: 16px;">Submit: once you are ready and have double checked your selections, click on <strong>Submit</strong> to create your MT5 account.</p>`,
        vtmarkets_3_3_content: `Congratulations, your MT5 account has been created. You now need to complete the second step of the KYC (Know Your Customer) process in order to unlock trading features of your account.`,
        vtmarkets_3_4_text: "Once done, you are all set.",
        vtmarkets_checkbox_2: "I entered the information above to setup my MetaTrader account",
        vtmarkets_checkbox_4: "My profile has been verified",

        // ===== STEP 4 DEPOSITS =====
        step4_bullwaves_content: `<p style="margin-bottom: 16px;">Once on your Bullwaves dashboard, click on the 'Fund Account' section in the left-hand panel. You will then be taken to the window displayed below. Make sure to select the correct account and enter 1,000€ (or equivalent) in the amount field.</p><p style="margin-bottom: 16px;">On the right side, choose your preferred payment method and click the 'Deposit Funds' button. From there, simply complete the deposit process.</p>`,
        step4_bullwaves_checkbox: "I confirm that my trading account is funded",
        step4_puprime_2_content: "On your PU Prime Dashboard, open the Funds tab and enter the amount of 1,000€ (or equivalent) in the 'Deposit Amount' field to start the process.",
        step4_puprime_checkbox_1: "I have selected the right account",
        step4_puprime_checkbox_2: "My desposit amount is 1000€ (or equivalent)",
        step4_puprime_3_content: "From here, choose your preferred payment method to continue funding your account.",
        step4_puprime_checkbox_3: "My account is correctly funded",
        step4_axi_2_content: `On your Axi Dashboard, click on the "Fund" section on the left hand side, to arrive on the page shown below. From here select your funding method and enter your details.`,
        step4_axi_3_content: "Once you reach the page shown in the image below, make sure to enter €1,000 (or equivalent) in the appropriate field.",
        step4_axi_checkbox_1: "I confirm that I entered an amount of €1,000 (or equivalent)",
        step4_axi_checkbox_2: "I confirm that my account is funded correctly.",
        step4_startrader_2_content: "On your Startrader dashboard, click on the 'Fund' section on the left-hand side to reach the page shown below. From there, make sure to select your newly created account and enter a funding amount of at least €1,000 (or equivalent).",
        step4_startrader_checkbox_1: "I confirm that I selected my newly created account",
        step4_startrader_checkbox_2: "I confirm that I entered a funding amount of at least €1,000 (or equivalent)",
        step4_startrader_3_content: "From this page, select your preferred payment method to proceed with account funding.",
        step4_startrader_checkbox_3: "I confirm that my trading account is now funded.",
        step4_vtmarkets_2_content: "On your VT Markets dashboard, click on the 'Funds' > 'Deposit' section on the left-hand side to reach the page shown below. From there, make sure to select your newly created account and enter a funding amount of at least €1,000 (or equivalent).",
        step4_vtmarkets_checkbox_1: "I confirm that I selected my newly created account",
        step4_vtmarkets_checkbox_2: "I confirm that I entered a funding amount of at least €1,000 (or equivalent)",
        step4_vtmarkets_3_content: "From this page, select your preferred payment method to proceed with account funding.",
        step4_vtmarkets_checkbox_3: "I confirm that my trading account is now funded.",
        step4_vantage_2_content: "On the Vantage Markets dashboard, use the 'Deposit' button on your newly created MetaTrader 5 account to fund it.",
        step4_vantage_3_content: "On reaching this windows, make sure to verify you selected your newly created account (normaly automatic). And introduce your desired fund amount (at least 1000€ or equivalent in for your currency).",
        step4_vantage_checkbox_1: "I confirm that the funded account is my newly created account",
        step4_vantage_checkbox_2: "I confirm that my initial deposit is at least €1,000 (or equivalent)",
        step4_vantage_4_content: "From here, choose your preferred payment method to continue funding your account.",
        step4_vantage_checkbox_3: "Please check this box after your account has been funded",

        // ===== STEP 5 =====
        step5_title: "MetaTrader 5",
        step5_description: `Download MetaTrader 5 on your smartphone to manage your account and follow the next steps. You can also search for <strong>"MetaTrader 5"</strong> directly on the App Store (iOS) or Play Store (Android).`,
        step5_ios: "Download for iOS",
        step5_android: "Download for Android",
        step5_app_store: "App Store",
        step5_play_store: "Play Store",
        step5_checkbox: "I confirm that I have downloaded and installed MetaTrader 5 on my device",
        step5_note: "If the download links do not open correctly, simply search for <strong>MetaTrader 5</strong> in your store and install the official app.",
    },

    fr: {
        // ===== PAGE D'ACCUEIL =====
        welcome_title: "Paiement confirmé !",
        welcome_subtitle: "Votre essai gratuit de 14 jours est maintenant actif. Complétez l'onboarding ci-dessous pour activer vos services.",
        welcome_duration_label: "Durée estimée",
        welcome_duration_value: "Moins de 10 minutes",
        welcome_email_label: "Email de confirmation",
        welcome_email_value: "Envoyé dans votre boîte mail",
        welcome_access_label: "Accès à l'onboarding",
        welcome_access_value: "Disponible à tout moment via votre email",
        welcome_need_help: "Besoin d'aide ? Contactez-nous",
        welcome_start_btn: "Commencer l'onboarding",

        // ===== COMMUN =====
        need_help: "Besoin d'aide ?",
        btn_continue: "Continuer",
        btn_back: "Retour",
        btn_setup_account: "Configurer mon compte",
        checkbox_completed: "J'ai complété cette étape",

        // ===== BARRE LATÉRALE =====
        sidebar_step1: "Introduction",
        sidebar_step1_sub: "Lire & confirmer",
        sidebar_step2: "Sélection du broker",
        sidebar_step2_sub: "Choisir votre broker",
        sidebar_step3: "Configuration du compte",
        sidebar_step3_sub: "Suivre les étapes",
        sidebar_step4: "Dépôt initial",
        sidebar_step4_sub: "Info importante",
        sidebar_step5: "MetaTrader 5",
        sidebar_step5_sub: "Installer l'app",
        sidebar_step6: "Configuration MT5",
        sidebar_step6_sub: "Connecter MT5",
        sidebar_step7: "Trade de vérification",
        sidebar_step7_sub: "Valider le compte",
        sidebar_step8: "Connexion à Javlot",
        sidebar_step8_sub: "Configuration sécurisée",

        // ===== ÉTAPE 1 =====
        step1_title: "Introduction",
        step1_description: "Prenez un moment pour lire cet avertissement. Il garantit une activation fluide et la meilleure expérience possible.",
        step1_info_box: `<p style="margin-bottom: 20px;">Pour une activation simple et réussie, il est essentiel de <span style="font-weight: 600;">lire chaque étape attentivement.</span> Omettre une étape <span style="font-weight: 600;">empêchera la liaison correcte de votre compte</span>, et le service ne pourra pas être activé.</p><p style="margin-bottom: 20px;">Avant de continuer, si ce n'est pas déjà fait, nous vous recommandons de lire la section <span style="font-weight: 600;">Fonctionnalités</span> de notre site.<br>Elle explique <span style="font-weight: 600;">le fonctionnement du bot, l'exécution des trades et la gestion des risques.</span><br>Cela vous aidera à comprendre pourquoi le bot peut <span style="font-weight: 600;">ne pas trader pendant plusieurs jours</span>.</p><p style="margin-bottom: 20px;">Ce comportement est <span style="font-weight: 600;">normal et volontaire</span> : il fait partie de sa logique de gestion du risque, ce n'est pas un bug. Notre objectif est que vous compreniez clairement : comment le système fonctionne, ce que le bot fait (et ne fait pas), et ce à quoi vous attendre une fois votre compte actif.</p><p style="margin-bottom: 0;">Si vous avez des questions, consultez notre <span style="font-weight: 600;">FAQ</span>. Si besoin, notre <span style="font-weight: 600;">support</span> est là pour vous aider.</p>`,
        step1_checkbox: "Je confirme avoir lu et compris les informations ci-dessus",

        // ===== ÉTAPE 2 =====
        step2_title: "Sélection du broker",
        step2_description: "Créez un compte chez l'un de nos brokers partenaires. Une fois créé, sélectionnez votre broker ci-dessous pour continuer.",
        step2_badge_recommended: "Recommandé",
        step2_badge_vpn: "VPN requis",
        step2_note: `Créez votre compte via le bouton ci-dessus et <strong>laissez le champ "Parrainage" vide.</strong> Cela garantit que votre compte MT5 pourra être correctement relié à nos signaux. Si vous avez déjà un compte existant chez l'un de nos brokers partenaires, <strong>il ne peut pas être connecté à notre système.</strong> Dans ce cas, créez un nouveau compte chez un autre broker pour accéder au service.`,

        // ===== ÉTAPE 3 - TITRES =====
        step3_title: "Configuration du compte broker",

        // ===== ÉTAPE 3 - VANTAGE =====
        vantage_desc_1: "Vérifiez votre identité pour débloquer vos limites de dépôt et de retrait.",
        vantage_desc_2: "Créez votre compte de trading MetaTrader 5 sur Vantage Markets.",
        vantage_desc_3: "Configurez votre compte MT5 avec les bons paramètres pour Javlot.",
        vantage_desc_4: "Confirmez que votre compte MT5 est créé et prêt pour un dépôt.",
        vantage_3_1_content: `<p style="margin-bottom: 16px;">Une fois votre compte Vantage Markets créé, vous devrez vérifier votre email, votre numéro de téléphone et votre pièce d'identité. Après validation, vous débloquerez une limite de dépôt et de retrait de <strong>50 000 $/jour</strong>.</p><p style="margin-bottom: 16px;">Si vous prévoyez d'investir plus de <strong>50 000 $</strong>, vous devrez aussi vérifier votre adresse résidentielle afin d'augmenter la limite jusqu'à <strong>10 000 000 $/jour</strong>.</p>`,
        vantage_3_2_content: `Une fois le KYC (Know Your Customer) terminé, vous pouvez créer votre compte MetaTrader 5. Cliquez sur <strong>"Open Account"</strong> pour commencer.`,
        vantage_3_3_content: `<p style="margin-bottom: 12px;">Choisissez une plateforme : <strong>Recommandé – MetaTrader 5</strong><br>Type de compte : <strong>RAW ECN</strong><br>Devise du compte : <strong>EUR obligatoire</strong></p><p style="margin-bottom: 12px;">Cochez la case et lisez les conditions avant de continuer.</p><p style="margin-bottom: 16px;"><strong>Submit :</strong> vérifiez vos choix, puis cliquez sur <strong>Submit</strong> pour créer votre compte MT5.</p>`,
        vantage_3_4_content: `Félicitations, votre compte MT5 est créé. Vous pouvez passer à <strong>l'Étape 4 : premier dépôt.</strong>`,
        vantage_checkbox_1: "J'ai terminé cette étape",
        vantage_checkbox_3: "J'ai ouvert mon compte avec les infos ci-dessus",
        vantage_checkbox_4: "Mon compte de trading est créé",

        // ===== ÉTAPE 3 - BULLWAVES =====
        bullwaves_desc_1: "Créez votre compte Bullwaves avec la bonne devise et votre mot de passe MT5.",
        bullwaves_desc_2: "Vérifiez que la plateforme, le type et le levier correspondent aux paramètres requis.",
        bullwaves_3_1_content: `<p style="margin-bottom: 16px;">Bullwaves propose une inscription simple. Renseignez vos informations personnelles, et votre compte MT5 est créé instantanément. Le point clé à vérifier est la devise du compte.</p><p style="margin-bottom: 16px;">Nous recommandons <strong>EUR</strong> (sans obligation). Choisissez aussi votre mot de passe avec soin : il sera également votre <strong>mot de passe MT5</strong>.</p>`,
        bullwaves_3_2_content: `Si vous voyez ce tableau de bord, votre compte broker est prêt. Vérifiez que la plateforme, le type de compte et le levier correspondent à l'exemple <strong>(MT5, Live &amp; 500)</strong>.`,
        bullwaves_checkbox_1: "J'ai saisi les bonnes infos MetaTrader",
        bullwaves_checkbox_2: "Mon compte est correctement configuré",

        // ===== ÉTAPE 3 - PU PRIME =====
        puprime_desc_1: "Renseignez vos informations personnelles, puis préparez la configuration du compte de trading.",
        puprime_desc_2: "Configurez votre compte MT5 avec les paramètres recommandés pour Javlot.",
        puprime_desc_3: "Terminez le KYC et confirmez que votre profil est vérifié.",
        puprime_3_1_content: `Une fois votre compte PU Prime créé, renseignez vos informations personnelles. Après <strong>"Next"</strong>, vous pourrez configurer votre compte de trading.`,
        puprime_3_2_content: `<p style="margin-bottom: 12px;">Choisissez la plateforme : <strong>Recommandé – MetaTrader 5</strong><br>Type de compte : <strong>Standard</strong><br>Levier : <strong>500:1</strong><br>Devise du compte : <strong>EUR</strong></p><p style="margin-bottom: 16px;">Quand c'est prêt, cliquez sur <strong>"Next"</strong> pour passer au KYC.</p>`,
        puprime_3_3_content: `<p style="margin-bottom: 16px;">Téléchargez votre pièce d'identité ou passeport. Une fois approuvé, votre profil affichera un badge <strong>"Verified"</strong> sur le statut KYC.</p><p style="margin-bottom: 16px;">Cette étape est obligatoire pour activer le trading et l'accès aux dépôts/retraits.</p>`,
        puprime_checkbox_1: "J'ai terminé cette étape",
        puprime_checkbox_2: "J'ai configuré mon compte avec les infos ci-dessus",
        puprime_checkbox_3: "Mon profil est vérifié",

        // ===== ÉTAPE 3 - AXI =====
        axi_desc_1: "Reprenez votre candidature et préparez la configuration du compte de trading.",
        axi_desc_2: "Configurez votre compte Axi MT5 avec la bonne plateforme et le bon type.",
        axi_desc_3: "Choisissez la devise et le levier avant de finaliser.",
        axi_desc_4: "Confirmez que votre tableau de bord et votre compte de trading sont prêts.",
        axi_3_1_content: `Après avoir créé votre compte Axi, vous arriverez sur cette page. Cliquez sur <strong>"Resume Application"</strong> pour terminer la configuration.`,
        axi_3_2_content: `<p style="margin-bottom: 12px;">Après vos informations personnelles, vous arriverez sur <strong>"Set up your new account"</strong>. Configurez comme ci-dessous :</p><p style="margin-bottom: 12px;">Plateforme de trading : <strong>MetaTrader 5</strong><br>Type de compte : <strong>PRO</strong><br>Sélection Join Axi : <strong>Optionnel</strong></p><p style="margin-bottom: 16px;">Puis cliquez sur <strong>"Next"</strong> pour la devise et le levier.</p>`,
        axi_3_3_content: `<p style="margin-bottom: 12px;">Sur cette page, sélectionnez :</p><p style="margin-bottom: 12px;">Devise du compte : <strong>EUR</strong><br>Levier : <strong>500:1</strong></p><p style="margin-bottom: 16px;">Puis cliquez sur <strong>"Next"</strong> pour terminer.</p>`,
        axi_3_4_content: `<p style="margin-bottom: 16px;">Félicitations ! Votre compte Axi MT5 est créé. Vous devriez voir un écran similaire ci-dessous.</p><p style="margin-bottom: 16px;">Passez à l'étape suivante pour effectuer votre premier dépôt.</p>`,
        axi_checkbox_2: "J'ai configuré mon compte avec les infos ci-dessus",
        axi_checkbox_3: "J'ai configuré la devise et le levier",
        axi_checkbox_4: "Mon compte de trading est créé",

        // ===== ÉTAPE 3 - STARTRADER =====
        startrader_desc_1: "Vérifiez si un VPN est nécessaire, puis renseignez vos infos sur Startrader.",
        startrader_desc_2: "Configurez votre compte Startrader MT5 avec les paramètres recommandés.",
        startrader_desc_3: "Terminez le KYC et confirmez que votre identité est vérifiée.",
        startrader_warning: `<p style="margin-bottom: 12px;">Startrader est restreint dans certaines régions (France, Union Européenne, États-Unis, Singapour, Inde, et Russie). Si vous résidez dans l'une de ces zones, vous pouvez accéder au service via un VPN.</p><p style="margin-bottom: 0;">Bien que cela ne soit pas illégal pour vous, nous recommandons de choisir un autre broker pour une conformité totale.</p>`,
        startrader_3_1_content: `Une fois votre compte Startrader créé, renseignez vos informations personnelles, puis cliquez sur <strong>"Next"</strong>.`,
        startrader_3_2_content: `<p style="margin-bottom: 12px;">Sur cette page, configurez votre compte comme suit :</p><p style="margin-bottom: 12px;">Plateforme de trading : <strong>MetaTrader 5</strong><br>Type de compte : <strong>RAW ECN</strong><br>Devise du compte : <strong>EUR recommandé</strong><br>Levier : <strong>500:1</strong></p><p style="margin-bottom: 16px;">Puis cliquez sur <strong>"Done"</strong> pour terminer.</p>`,
        startrader_3_3_content: `<p style="margin-bottom: 16px;">Enfin, vérifiez votre identité en téléchargeant votre pièce d'identité ou passeport. Une fois approuvé, votre profil affichera <strong>"Verified"</strong>.</p><p style="margin-bottom: 16px;">Cette étape est obligatoire pour activer le trading.</p>`,
        startrader_checkbox_1: "Je comprends que ce broker peut nécessiter un VPN",
        startrader_checkbox_2: "J'ai saisi les infos ci-dessus pour configurer mon compte",
        startrader_checkbox_3: "Mon compte est créé et mon identité vérifiée",

        // ===== ÉTAPE 3 - VT MARKETS =====
        vtmarkets_desc_1: "Vérifiez votre profil VT Markets avant de créer votre compte MT5.",
        vtmarkets_desc_2: "Créez votre compte MetaTrader 5 avec la bonne plateforme et devise.",
        vtmarkets_desc_3: "Terminez la deuxième partie du KYC pour débloquer les fonctions de trading.",
        vtmarkets_desc_4: "Confirmez que votre profil VT Markets est vérifié et prêt.",
        vtmarkets_warning: `<p style="margin-bottom: 12px;">VT Markets est restreint dans certaines régions (France, Union Européenne, États-Unis, Singapour, Inde, et Russie). Si vous résidez dans l'une de ces zones, vous pouvez accéder au service via un VPN.</p><p style="margin-bottom: 0;">Bien que cela ne soit pas illégal pour vous, nous recommandons de choisir un autre broker pour une conformité totale.</p>`,
        vtmarkets_3_1_content: `<p style="margin-bottom: 16px;">Une fois votre compte VT Markets créé, vérifiez vos infos personnelles, téléphone et email. Ensuite, vous pourrez créer votre compte MT5.</p><p style="margin-bottom: 16px;">VT Markets ne demande pas de justificatif de domicile, sauf en cas d'activité suspecte.</p>`,
        vtmarkets_3_2_content: `<p style="margin-bottom: 12px;">Allez dans <strong>"Accounts"</strong> > <strong>"Open Trading Account"</strong>. Configurez comme suit :</p><p style="margin-bottom: 12px;">Plateforme : <strong>MetaTrader 5</strong><br>Type de compte : <strong>Standard STP</strong><br>Levier : <strong>500:1</strong><br>Devise : <strong>EUR</strong></p><p style="margin-bottom: 16px;">Puis cliquez sur <strong>"Open an Account"</strong>.</p>`,
        vtmarkets_3_3_content: `<p style="margin-bottom: 16px;">Terminez le KYC en téléchargeant votre pièce d'identité. Une fois approuvé, votre profil affichera un badge <strong>"Verified"</strong>.</p><p style="margin-bottom: 16px;">Cette étape est obligatoire pour activer le trading.</p>`,
        vtmarkets_3_4_content: `<p style="margin-bottom: 16px;">Félicitations ! Votre compte VT Markets MT5 est créé et vérifié.</p><p style="margin-bottom: 16px;">Vous pouvez passer à l'étape suivante pour votre premier dépôt.</p>`,
        vtmarkets_checkbox_1: "J'ai terminé cette étape",
        vtmarkets_checkbox_2: "J'ai créé mon compte MT5 avec les bons paramètres",
        vtmarkets_checkbox_3: "Mon profil est vérifié",
        vtmarkets_checkbox_4: "Mon compte de trading est prêt",

        // ===== ÉTAPE 4 DÉPÔTS =====
        step4_title: "Premier Dépôt",
        step4_info_box: `
            <p style="margin-bottom: 14px; font-weight: 700; color: #000000;">Important – Instructions de Dépôt Initial</p>
            <p style="margin-bottom: 14px;">Pour activer votre accès côté broker, un premier dépôt d'<strong>exactement 1 000 €</strong> est requis.</p>
            <p style="margin-bottom: 14px;">Veuillez noter qu'il n'y a aucun avantage à déposer plus de <strong>1 000 €</strong> à ce stade. Au contraire, nous recommandons fortement de ne pas dépasser ce montant pour le moment.</p>
            <p style="margin-bottom: 12px; font-weight: 600; color: #000000;">Voici pourquoi :</p>
            <p style="margin-bottom: 14px;">La prochaine étape du processus (Étape 7) inclut un trade de vérification obligatoire requis par le broker dans le cadre de leur procédure anti-bot et de validation de compte. Ce trade doit être placé avec une taille de lot de <strong>1</strong>, ce qui est inhabituellement élevé pour une configuration initiale.</p>
            <p style="margin-bottom: 14px;">À cause de cela, déposer plus de <strong>1 000 €</strong> à ce stade ne ferait qu'augmenter l'exposition inutilement, sans fournir aucun avantage.</p>
            <p style="margin-bottom: 12px; font-weight: 600; color: #000000;">Rassurez-vous :</p>
            <ul style="margin: 0 0 14px 20px; padding: 0; color: #4B5563;">
                <li style="margin-bottom: 8px;">Cette étape de vérification est standard et temporaire</li>
                <li style="margin-bottom: 8px;">Nous vous guiderons étape par étape à travers le processus</li>
                <li style="margin-bottom: 8px;">Vous recevrez des pratiques claires pour exécuter ce trade en toute sécurité</li>
                <li style="margin-bottom: 8px;">Il n'y a pas besoin de stresser – l'objectif est la validation, pas la performance</li>
            </ul>
            <p style="margin: 0;">Une fois cette étape terminée, votre compte sera entièrement validé et prêt à opérer dans des conditions normales.</p>
        `,
        step4_checkbox_1: "Je comprends qu'un dépôt de 1 000 € (ou équivalent) est requis pour activer mon compte broker",
        step4_checkbox_2: "Je comprends que déposer plus de 1 000 € à ce stade n'est pas recommandé et que je pourrai approvisionner mon compte correctement après l'Step 7",
        step4_bullwaves_content: `<p style="margin-bottom: 16px;">Sur votre tableau de bord Bullwaves, cliquez sur 'Fund Account' à gauche. Sélectionnez le bon compte et entrez 1 000 € (ou équivalent).</p><p style="margin-bottom: 16px;">Choisissez votre méthode de paiement et cliquez sur 'Deposit Funds' pour terminer.</p>`,
        step4_bullwaves_checkbox: "Je confirme que mon compte de trading est approvisionné",
        step4_puprime_2_content: "Sur votre tableau de bord PU Prime, ouvrez l'onglet Funds et entrez 1 000 € (ou équivalent) dans 'Deposit Amount'.",
        step4_puprime_checkbox_1: "J'ai sélectionné le bon compte",
        step4_puprime_checkbox_2: "Mon montant de dépôt est de 1000€ (ou équivalent)",
        step4_puprime_3_content: "Choisissez votre méthode de paiement pour continuer.",
        step4_puprime_checkbox_3: "Mon compte est correctement approvisionné",
        step4_axi_2_content: `Sur votre tableau de bord Axi, cliquez sur "Fund" à gauche. Sélectionnez votre méthode de financement et entrez vos détails.`,
        step4_axi_3_content: "Entrez 1 000 € (ou équivalent) dans le champ approprié.",
        step4_axi_checkbox_1: "Je confirme avoir saisi un montant de 1 000 € (ou équivalent)",
        step4_axi_checkbox_2: "Je confirme que mon compte est approvisionné correctement.",
        step4_startrader_2_content: "Sur votre tableau de bord Startrader, cliquez sur 'Fund' à gauche. Sélectionnez votre nouveau compte et entrez au moins 1 000 €.",
        step4_startrader_checkbox_1: "Je confirme avoir sélectionné mon nouveau compte",
        step4_startrader_checkbox_2: "Je confirme avoir saisi un montant d'au moins 1 000 €",
        step4_startrader_3_content: "Sélectionnez votre méthode de paiement pour procéder au financement.",
        step4_startrader_checkbox_3: "Je confirme que mon compte de trading est approvisionné.",
        step4_vtmarkets_2_content: "Sur votre tableau de bord VT Markets, cliquez sur 'Funds' > 'Deposit'. Sélectionnez votre nouveau compte et entrez au moins 1 000 €.",
        step4_vtmarkets_checkbox_1: "Je confirme avoir sélectionné mon nouveau compte",
        step4_vtmarkets_checkbox_2: "Je confirme avoir saisi un montant d'au moins 1 000 €",
        step4_vtmarkets_3_content: "Sélectionnez votre méthode de paiement pour continuer.",
        step4_vtmarkets_checkbox_3: "Je confirme que mon compte de trading est approvisionné.",
        step4_vantage_2_content: "Sur le tableau de bord Vantage Markets, utilisez le bouton 'Deposit' sur votre nouveau compte MT5.",
        step4_vantage_3_content: "Vérifiez que vous avez sélectionné le bon compte et entrez le montant souhaité (au moins 1 000 € ou équivalent).",
        step4_vantage_checkbox_1: "Je confirme que le compte approvisionné est mon nouveau compte",
        step4_vantage_checkbox_2: "Je confirme que mon dépôt initial est d'au moins 1 000 €",
        step4_vantage_4_content: "Choisissez votre méthode de paiement pour continuer.",
        step4_vantage_checkbox_3: "Veuillez cocher cette case une fois votre compte approvisionné",

        // ===== STEP 5 =====
        step5_title: "MetaTrader 5",
        step5_description: `Téléchargez MetaTrader 5 sur votre smartphone pour gérer votre compte et suivre les prochaines étapes. Vous pouvez aussi chercher <strong>"MetaTrader 5"</strong> sur l'App Store (iOS) ou le Play Store (Android).`,
        step5_ios: "Télécharger pour iOS",
        step5_android: "Télécharger pour Android",
        step5_app_store: "App Store",
        step5_play_store: "Play Store",
        step5_checkbox: "Je confirme avoir téléchargé et installé MetaTrader 5 sur mon appareil",
        step5_note: "Si les liens ne s'ouvrent pas, recherchez <strong>MetaTrader 5</strong> dans votre store et installez l'application officielle.",

        // ===== STEP 6 =====
        step6_title: "Configuration MetaTrader",
        mt_desc_1: "Récupérez vos identifiants MetaTrader 5 dans votre email.",
        mt_desc_2: "Connectez-vous à votre compte de trading dans l'application MetaTrader 5.",
        mt_desc_3: "Ajoutez la cotation requise pour votre broker.",
        mt_desc_4: "Dernière vérification avant la procédure anti-bot.",
        step6_1_content: `<p class="step-description" style="margin-bottom: 14px;">Maintenant que votre compte MetaTrader 5 est créé et financé, vous avez besoin de vos identifiants. Ils sont envoyés par email par le broker sélectionné.</p><p class="step-description" style="margin-top: 0;">Pour les retrouver, cherchez <strong>'MT5 Account'</strong> dans votre boîte mail et vérifiez aussi le spam. L'email ressemble à l'exemple ci-dessous.</p>`,
        step6_1_note: "<strong>Note :</strong> Bullwaves : votre mot de passe MT5 est identique à votre mot de passe Bullwaves.",
        step6_1_checkbox: "Je confirme avoir trouvé mes identifiants MetaTrader 5.",
        step6_2_content: `Ouvrez MetaTrader 5, puis <strong>"Réglages"</strong> (en bas à droite) et <strong>"Nouveau compte"</strong>. Recherchez votre broker, puis sélectionnez le <strong>serveur live</strong> indiqué dans l'email (pas un serveur démo). Entrez ensuite votre <strong>Login</strong> et <strong>Mot de passe</strong>.`,
        step6_2_checkbox: "Je confirme être connecté à mon compte MetaTrader 5.",
        step6_3_content: `Allez dans <strong>"Cotations"</strong> (en bas), puis appuyez sur <strong>"+"</strong> (en haut à droite). Recherchez et ajoutez la cotation EURUSD correspondant à votre broker. La bonne cotation est indiquée sur l'image ci-dessous.`,
        step6_3_checkbox: "Je confirme avoir ajouté la bonne cotation EURUSD.",
        step6_4_warning: `<strong>Important :</strong> Ne continuez pas si vous êtes dans les heures de session de New York (<span class="ny-hours-local"></span>). Attendez la fermeture de la session.`,
        step6_4_checkbox: "Je confirme être en dehors des heures de session de New York.",
        step6_4_desc: "Votre compte est configuré et prêt pour la validation anti-bot.",

        // ===== STEP 7 =====
        step7_title: "Trade de vérification",
        verif_desc_1: "Configurez le trade de vérification dans MetaTrader 5.",
        verif_desc_2: "Exécutez le trade en sécurité et validez votre compte.",
        step7_1_content: `Vous allez maintenant configurer le trade de vérification.<br>Allez dans 'Trade' dans MetaTrader 5 et appuyez sur '+'. Vous pourrez ajuster les paramètres.<br><br>Sélectionnez EURUSD, correspondant à la cotation ajoutée à l'étape précédente (référez-vous à l'image).<br>Entrez une taille de lot de 1.00. C'est obligatoire : la vérification échouera avec une valeur différente.`,
        step7_1_checkbox_1: "Je confirme utiliser la bonne paire pour mon broker",
        step7_1_checkbox_2: "Je confirme utiliser une taille de lot de 1.00",
        step7_1_checkbox_3: "Je confirme être hors session de New York",
        step7_2_warning: `<strong>Avant toute action, lisez attentivement l'intégralité de cette étape.</strong>`,
        step7_2_content: `Une fois tout confirmé, lancez le trade via <strong>"Vendre au marché"</strong> ou <strong>"Acheter au marché"</strong>.<br><br>Après exécution, attendez au moins 15 secondes, puis fermez la position. Elle doit rester ouverte <strong>au moins 15 secondes</strong>, sinon la vérification échouera.<br><br>Après la clôture, un petit solde négatif peut apparaître. C'est normal dans ce processus.`,
        step7_2_checkbox_1: "Je confirme avoir exécuté et fermé le trade de vérification",
        step7_2_checkbox_2: "Je confirme que mon compte est prêt à être connecté à Javlot",

        // ===== STEP 8 =====
        step8_title: "Connexion à Javlot",
        step8_description: "Entrez vos identifiants MetaTrader 5 pour lier votre compte au service en toute sécurité.",
        step8_email_label: "Adresse email (utilisée pour la facturation Stripe)",
        step8_email_placeholder: "Adresse email",
        step8_account_label: "Numéro de compte MT5",
        step8_account_placeholder: "Entrez le numéro de compte MT5",
        step8_password_label: "Mot de passe du compte MT5",
        step8_password_placeholder: "Entrez le mot de passe MT5",
        step8_server_label: "Serveur MT5",
        step8_server_placeholder: "Entrez le serveur MT5",
        step8_checkbox_1: "Je confirme que les informations saisies sont correctes.",
        step8_checkbox_2: "Je comprends que ces identifiants servent uniquement à lier mon compte MT5 au service.",
        step8_info_1: "Vérifiez tout avant d'envoyer : une info incorrecte empêchera la liaison MT5. Vos identifiants MT5 sont sensibles, ne les partagez jamais hors de ce formulaire. L'équipe Javlot ne vous les demandera jamais directement.",
        step8_info_2: "Ce formulaire est chiffré et traité automatiquement pour connecter votre compte. Vos identifiants ne sont pas accessibles à notre équipe et ne sont pas conservés après la configuration.",
    }
};

export function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
}

export function setLanguage(lang) {
    state.currentLang = lang; // Update state
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations();

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

export function t(key) {
    return translations[state.currentLang][key] || key;
}

export function applyTranslations() {
    const lang = state.currentLang;
    const texts = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (texts[key]) {
            el.innerHTML = texts[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (texts[key]) {
            el.placeholder = texts[key];
        }
    });

    // Also update dynamic text if needed (like step descriptions that depend on sub-steps)
    // This will be handled by updateStep functions calling t()
}

// Make t available globally if needed by other modules, or import it
// For strict backup compatibility where t() was global:
window.t = t;

