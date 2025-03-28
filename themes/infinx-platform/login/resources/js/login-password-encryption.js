
// On window load
window.onload = function() {
	
    const authFormLoginElt = this.document.getElementById("kc-form-login");
    // const authFormResetElt = this.document.getElementById("kc-reset-password-form");
    const authFormUpdateElt = this.document.getElementById("kc-passwd-update-form");
    const authFormRegisterElt = this.document.getElementById("kc-register-form");
    
    if(authFormLoginElt != null) {
    	
        const submitBtnLoginElt = this.document.getElementById('kc-login');
        const passwordLoginElt = this.document.getElementById('password');

        browserFormPwdEncrypt.registerPasswordSubmitEvent(passwordLoginElt, null, submitBtnLoginElt, authFormLoginElt);
        
    // } else if(authFormResetElt != null) {
    //     const passwordNewUpdateElt = this.document.getElementById('password-new');
    //     const passwordConfirmUpdateElt = this.document.getElementById('password-confirm');
    //     const submitBtnUpdateElt = this.document.getElementById('kc-passwd-reset-btn');
        
    //     browserFormPwdEncrypt.registerPasswordSubmitEvent(passwordNewUpdateElt, passwordConfirmUpdateElt, submitBtnUpdateElt, authFormUpdateElt);
    	


    } else if(authFormUpdateElt != null) {
    	
        const passwordNewUpdateElt = this.document.getElementById('password-new');
        const passwordConfirmUpdateElt = this.document.getElementById('password-confirm');
        // const submitBtnUpdateElt = this.document.getElementsByClassName('btn btn-primary btn-block btn-lg')[0];
        const submitBtnUpdateElt = this.document.getElementById('kc-passwd-update-btn');
        
        browserFormPwdEncrypt.registerPasswordSubmitEvent(passwordNewUpdateElt, passwordConfirmUpdateElt, submitBtnUpdateElt, authFormUpdateElt, true);
    	
    } else if (authFormRegisterElt != null) {

        const passwordRegisterElt = this.document.getElementById('password');
        const passwordConfirmRegisterElt = this.document.getElementById('password-confirm');
        // const submitBtnRegisterElt = this.document.getElementsByClassName('btn btn-primary btn-block btn-lg')[0];
        const submitBtnRegisterElt = this.document.getElementById('kc-register-password-btn');
    	
        browserFormPwdEncrypt.registerPasswordSubmitEvent(passwordRegisterElt, passwordConfirmRegisterElt, submitBtnRegisterElt, authFormRegisterElt);
    	
    }
}
