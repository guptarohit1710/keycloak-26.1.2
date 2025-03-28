<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayWide=false displayRequiredFields=false showAnotherWayIfPresent=true>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="${properties.kcHtmlClass!}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">

    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
            <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
        </#list>
    </#if>
    <title>${msg("loginTitle",(realm.displayName!''))}</title>
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#if properties.scripts?has_content>
        <#list properties.scripts?split(' ') as script>
            <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
        </#list>
    </#if>
    <#if scripts??>
        <#list scripts as script>
            <script src="${script}" type="text/javascript"></script>
        </#list>
    </#if>
</head>

<body>
  	<div class="${properties.kcLoginClass!}" style="margin: 20px;">	
	
			<div class="blue-bg">
				<div class="infinx-logo">
					<img alt="INFINX" class="infinx-logo-img" src="${url.resourcesPath}/img/infinx-logo-new.png"/>
				</div>
				<div class="welcome-image-wrapper">
					<div class="welcome-image first"></div>
				</div>
				<div class="dots-wrapper">
					<div class="dot active"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
			<div class="form-wrapper">
				<div class="kc-content-wrapper">
					<#if client.clientId?has_content && client.clientId == "ias-app">
						<h4 class="login-title">Login to IAS</h4>
					<#elseif client.clientId?has_content && client.clientId == "iws-srvc-app">
						<h4 class="login-title">Login to IWS</h4>
					<#elseif client.clientId?has_content && client.clientId == "idc-srvc-app">
						<h4 class="login-title">Login to IDC</h4>
					<#elseif client.clientId?has_content && client.clientId == "pap-contract-frontend-app">
						<h4 class="login-title">Login to IPA Gen 2</h4>
					<#else>
						<h4 class="login-title">Login</h4>
					</#if>
					<#--  <div id="redirect-uri"></div>  -->
					<#if displayMessage && message?has_content && (message.type != 'warning' && !isAppInitiatedAction??)>
						<div class="alert-wrapper">
							<div class="alert-${message.type} ${properties.kcAlertClass!} pf-m-<#if message.type = 'error'>danger<#else>${message.type}</#if>">
								<div class="pf-c-alert__icon">
									<#if message.type = 'success'><span class="${properties.kcFeedbackSuccessIcon!}"></span></#if>
									<#if message.type = 'warning'><span class="${properties.kcFeedbackWarningIcon!}"></span></#if>
									<#if message.type = 'error'><span class="${properties.kcFeedbackErrorIcon!}"></span></#if>
									<#if message.type = 'info'><span class="${properties.kcFeedbackInfoIcon!}"></span></#if>
								</div>
									<span class="${properties.kcAlertTitleClass!}">${kcSanitize(message.summary)?no_esc}</span>
							</div>
						</div>
					</#if>
					<#nested "form">
				</div>
				<#if displayInfo>
					<div id="kc-info" class="${properties.kcSignUpClass!}">
						<div id="kc-info-wrapper" class="${properties.kcInfoAreaWrapperClass!}">
							<#nested "info">
						</div>
					</div>
				</#if>
			</div>
  	</div>
  	<div id="support-btn-wrap">
			<#--  <img id="support-svg" src="${url.resourcesPath}/img/chat.png" style="width: 25px;" />  -->
			<#--  <svg id="close-svg" style="display: none;" stroke="currentColor" fill="currentColor" stroke-width="0"
				viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z">
				</path>
			</svg>  -->
			<svg style="margin-right: 10px;" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.45 16C10.8 16 11.0958 15.8792 11.3375 15.6375C11.5792 15.3958 11.7 15.1 11.7 14.75C11.7 14.4 11.5792 14.1042 11.3375 13.8625C11.0958 13.6208 10.8 13.5 10.45 13.5C10.1 13.5 9.80417 13.6208 9.5625 13.8625C9.32083 14.1042 9.2 14.4 9.2 14.75C9.2 15.1 9.32083 15.3958 9.5625 15.6375C9.80417 15.8792 10.1 16 10.45 16ZM9.55 12.15H11.4C11.4 11.6 11.4625 11.1667 11.5875 10.85C11.7125 10.5333 12.0667 10.1 12.65 9.55C13.0833 9.11667 13.425 8.70417 13.675 8.3125C13.925 7.92083 14.05 7.45 14.05 6.9C14.05 5.96667 13.7083 5.25 13.025 4.75C12.3417 4.25 11.5333 4 10.6 4C9.65 4 8.87917 4.25 8.2875 4.75C7.69583 5.25 7.28333 5.85 7.05 6.55L8.7 7.2C8.78333 6.9 8.97083 6.575 9.2625 6.225C9.55417 5.875 10 5.7 10.6 5.7C11.1333 5.7 11.5333 5.84583 11.8 6.1375C12.0667 6.42917 12.2 6.75 12.2 7.1C12.2 7.43333 12.1 7.74583 11.9 8.0375C11.7 8.32917 11.45 8.6 11.15 8.85C10.4167 9.5 9.96667 9.99167 9.8 10.325C9.63333 10.6583 9.55 11.2667 9.55 12.15ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20ZM10.5 18C12.7333 18 14.625 17.225 16.175 15.675C17.725 14.125 18.5 12.2333 18.5 10C18.5 7.76667 17.725 5.875 16.175 4.325C14.625 2.775 12.7333 2 10.5 2C8.26667 2 6.375 2.775 4.825 4.325C3.275 5.875 2.5 7.76667 2.5 10C2.5 12.2333 3.275 14.125 4.825 15.675C6.375 17.225 8.26667 18 10.5 18Z" fill="white"/>
</svg>
<span class="support-text">Support</span>
	</div>
</body>
</html>
</#macro>
