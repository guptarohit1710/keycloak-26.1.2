<#import "template.ftl" as layout>
<#import "password-commons.ftl" as passwordCommons>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password','password-confirm'); section>
    <#if section = "header">
        ${msg("updatePasswordTitle")}
    <#elseif section = "form">
		<div id="kc-form">
			<div id="kc-form-wrapper">
				<form id="kc-passwd-update-form" class="${properties.kcFormClass!}" action="${url.loginAction}" method="post">
					<div class="update-password-title">Update Password</div>
					
					<div class="input-group">
					<div class="input-container">
									<input tabindex="1" id="password-new" name="password-new" type="password" placeholder="" autofocus/>
									<label for="password-new" class="floating-label">Enter New Password</label>
								</div>
						<div class="password-toggle show" forid="password-new"></div>
					</div>
					<#if messagesPerField.existsError('password')>
						<span id="input-error-password" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
							${kcSanitize(messagesPerField.get('password'))?no_esc}
						</span>
					</#if>
					<div class="input-group">
					<div class="input-container">
									<input tabindex="2" id="password-confirm" name="password-confirm" type="password" placeholder="" autofocus/>
									<label for="password-confirm" class="floating-label">Enter Confirm Password</label>
								</div>
						<div class="password-toggle show" forid="password-confirm"></div>
					</div>
					<#if messagesPerField.existsError('password-confirm')>
						<span id="input-error-password-confirm" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
							${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}
						</span>
					</#if>
					<input type="text" id="username" name="username" value="${username}" autocomplete="username"
						readonly="readonly" style="display:none;"/>
					<input type="password" id="password" name="password" autocomplete="current-password" style="display:none;"/>


					<div class="${properties.kcFormGroupClass!}">
					<@passwordCommons.logoutOtherSessions/>
						<div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
							<div class="${properties.kcFormOptionsWrapperClass!}">
								<#if isAppInitiatedAction??>
									<div class="checkbox">
										<label><input type="checkbox" id="logout-sessions" name="logout-sessions" value="on" checked> ${msg("logoutOtherSessions")}</label>
									</div>
								</#if>
							</div>
						</div>
					</div>
					<div class="row acenter" style="margin-top:20px">
						<button tabindex="4" type="submit" class="login-button" id="kc-login">Reset</button>	
					</div>
					<ul class="prules">
						<li>Password must be atleast 8 character long.</li>
						<li>Password must be alphanumeric with atleast an uppercase and one special character.</li>
						<li>Password must not include any of the last four recently used passwords.</li>
					</ul>
				</form>	
			</div>
		</div>
    </#if>
</@layout.registrationLayout>