<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true displayMessage=!messagesPerField.existsError('username'); section>
    <#if section = "header">
        ${msg("emailForgotTitle")}
    <#elseif section = "form">
        <script>
            var loginUrl = "${url.loginUrl}";
        </script>
		<div id="kc-form">
		<div id='kc-form-wrapper'>
			<form id="kc-reset-password-form" class="${properties.kcFormClass!}" action="${url.loginAction}" method="post">
				<div class="reset-password-subtitle">Enter your username or email address and we will send you instructions on how to create a new password.</div>
				<div class="input-group">
								<div class="input-container">
									<input tabindex="1" id="username" name="username" type="text" placeholder="" autofocus/>
									<label for="username" class="floating-label">Username or Email</label>
								</div>
							<img src="${url.resourcesPath}/img/icouser.svg" alt="" class="inpico"/>
						</div>
				<#if messagesPerField.existsError('username')>
					<span id="input-error-username" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
								${kcSanitize(messagesPerField.get('username'))?no_esc}
					</span>
				</#if>
				<div style="height:10px"></div>
				<button tabindex="4" type="submit" class="login-button" id="kc-login">Verify</button>
				<div style="height:10px"></div>
				<div class="row acenter" style="width:100%">
				<div class="spacer"></div>
					<div class="forgot-password">
						<a href="${url.loginUrl}">Back to Login</a>
					</div>
				<div class="spacer"></div>
				</div>
			</form>
		</div>
		</div>
    <#elseif section = "info" >
        
    </#if>
</@layout.registrationLayout>
