<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo displayWide=(realm.password && social.providers??); section>
    <#if section = "header">
    <#elseif section = "form">
        <div id="kc-form" <#if realm.password && social.providers??>class="${properties.kcContentWrapperClass!}"</#if>>
            <div id="kc-form-wrapper" <#if realm.password && social.providers??>class="${properties.kcFormSocialAccountContentClass!} ${properties.kcFormSocialAccountClass!}"</#if>>
                <#if realm.password>
                    <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input tabindex="1" id="username" name="username" type="text" placeholder="Enter your Username" autofill="off" required/>
                        </div>
                        <div class="input-group">
                          <label for="password">Password</label>
<div class="password-container">
    <input tabindex="2" id="password" name="password" type="password" placeholder="Enter your password" autofill="off" required />
    <span class="password-toggle show" forid="password"></span>  <!-- Add forid attribute -->
</div> 
                        <div class="options-block">
                            <div class="remember-me">
                            </div>
                            <div class="forgot-password">
                                <a href="${url.loginResetCredentialsUrl}" style="color: #006FEE;">Forgot Username or password?</a>
                            </div>
                        </div>

                        <button tabindex="4" type="submit" class="login-button">Log In</button>
                       
                    </form>
                </#if>
            </div>
        </div>
    </#if>
</@layout.registrationLayout>