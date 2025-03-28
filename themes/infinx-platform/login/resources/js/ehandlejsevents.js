console.log("version 5-04 loaded");
function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }
r(function () {

	const changeImage = () => {
		let image = document.querySelector(".welcome-image");
		let classList = image.classList;
		if (classList.contains("first")) {
			image.classList.remove("first");
			image.classList.add("second");
			let dot1 = document.querySelector(".dot:nth-child(1)");
			let dot2 = document.querySelector(".dot:nth-child(2)");
			dot1.classList.remove("active");
			dot2.classList.add("active")
			// document.querySelector(".welcome-subtitle").innerHTML = "Whether there is one case or thousands, one file<br/> or multiple, it is easy to upload records with IAS."
		} else if (classList.contains("second")) {
			image.classList.remove("second");
			image.classList.add("third");
			let dot1 = document.querySelector(".dot:nth-child(2)");
			let dot2 = document.querySelector(".dot:nth-child(3)");
			dot1.classList.remove("active");
			dot2.classList.add("active")
			// document.querySelector(".welcome-subtitle").innerHTML = "Schedule multiple runs and get faster results<br/> with fast automation."
		} else if (classList.contains("third")) {
			image.classList.remove("third");
			image.classList.add("fourth");
			let dot1 = document.querySelector(".dot:nth-child(3)");
			let dot2 = document.querySelector(".dot:nth-child(4)");
			dot1.classList.remove("active");
			dot2.classList.add("active")
			// document.querySelector(".welcome-subtitle").innerHTML = "Streamline your workflow with advanced analytics<br/> and make data-driven decisions."
		} else if (classList.contains("fourth")) {
			image.classList.remove("fourth");
			image.classList.add("first");
			let dot1 = document.querySelector(".dot:nth-child(4)");
			let dot2 = document.querySelector(".dot:nth-child(1)");
			dot1.classList.remove("active");
			dot2.classList.add("active")
			// document.querySelector(".welcome-subtitle").innerHTML = "Automate mundane tasks with efficiency and ease<br/> and get faster results with high accuracy."
		}
	}
	setInterval(() => {
		changeImage()
	}, 4000);

	const supportButton = document.getElementById("support-btn-wrap");
	const supportSvg = document.getElementById("support-svg");
	const closeSvg = document.getElementById("close-svg");

	const ticketBtn = document.getElementById("ticketbtn");
	const emailBtn = document.getElementById("emailbtn");

	let supportButtonOpen = false;
	// closeSvg.style.display = "none";

	let bottomPosition = window.getComputedStyle(document.documentElement).getPropertyValue('--bottom-position');
	let supportWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--support-width');
	let supportOptionWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--support-option-width');

	const showButtons = () => {
		ticketBtn.style.opacity = 1;
		ticketBtn.style.bottom = `calc(${bottomPosition} + ${supportWidth} + 10px + ${supportOptionWidth} + 10px)`
		emailBtn.style.opacity = 1;
		emailBtn.style.bottom = `calc(${bottomPosition} + ${supportWidth} + 10px`;
	}

	const hideButtons = () => {
		ticketBtn.style.opacity = 0;
		emailBtn.style.opacity = 0;
		ticketBtn.style.bottom = bottomPosition;
		emailBtn.style.bottom = bottomPosition;
	}

	// hideButtons();

	const closePopup = () => {
		supportButton.style.transform = "rotate(0deg)";
		closeSvg.style.display = "none";
		supportSvg.style.display = "block";
		hideButtons();
		supportButtonOpen = false;
	}

	// const openPopup = () => {
	// 	supportButton.style.transform = "rotate(180deg)";
	// 	closeSvg.style.display = "block";
	// 	supportSvg.style.display = "none";
	// 	showButtons();
	// 	supportButtonOpen = true;
	// }

	supportButton.addEventListener("click", () => {
		if (!supportButtonOpen) {
			openPopup();
		} else {
			closePopup();
		}
	})

	// ticketBtn.addEventListener("click", () => {
	// 	window.open("https://support.infinx.com/support/login", "_blank");
	// 	closePopup();
	// })

	// emailBtn.addEventListener("click", () => {
	// 	window.open("mailto:support@infinx.com?subject=IAS : Support Request", "_blank");
	// 	closePopup();
	// })


	let allToggles = document.querySelectorAll(".password-toggle");
if (allToggles.length > 0) {
    for (const toggle of allToggles) {
        if (toggle) {
            toggle.addEventListener("click", (e) => {
                let currentTarget = e.target;
                let forSelector = currentTarget.getAttribute("forid");  // Use the correct attribute
                let passwordInput = document.getElementById(forSelector); // Target the input using forid
				let type = passwordInput.getAttribute("type")        
        // Toggle password visibility
                if (type == "password") {
                    passwordInput.setAttribute("type", "text");
                    toggle.classList.remove("show");
                    toggle.classList.add("hide");
                } else {
                    passwordInput.setAttribute("type", "password");
                    toggle.classList.remove("hide");
                    toggle.classList.add("show");
                }
            });
        }
    }
}

	let otpForm = document.getElementById("kc-otp-login-form");
	if (otpForm) {
		//we are on the enter otp page
		//generate the OTP UI inside the form element
		const OTP_LENGTH = 6;
		otpForm.setAttribute("autocomplete", "off");
		let formWrapper = document.querySelector(".kc-content-wrapper");
		let otpInp = document.getElementById("otp") || document.getElementById("emailCode");
		let otpId = otpInp.getAttribute("id");
		let originalOtpInput = otpInp.cloneNode(true);

		//clean the existing html
		otpForm.innerHTML = "";

		if (formWrapper.contains(otpForm)) {
			formWrapper.removeChild(otpForm);
		}

		let contentWrapper = document.createElement("div");
		contentWrapper.classList.add("kc-content-wrapper");
		contentWrapper.innerHTML = "<div id='kc-form'><div id='kc-form-wrapper'></div></div>";

		contentWrapper.querySelector("#kc-form-wrapper").appendChild(otpForm);
		formWrapper.appendChild(contentWrapper);


		let topSection = document.createElement("div");
		// topSection.classList.add("top-section");
		// let base = getResourcesPath();
		// topSection.innerHTML = `<img src=${base}/img/uservector.png alt="user input"/><div class="login-subtitle">Login</div>`;
		otpForm.appendChild(topSection);
		let instructions = document.createElement("div");
		instructions.innerText = otpId == "otp" ? "Enter the authentication code, sent to authenticator app to complete Login" : "Enter the authentication code to sent to registered mail id to complete Login";
		instructions.classList.add("otp-ins");
		topSection.appendChild(instructions);

		let hiddenWrapper = document.createElement("div");
		hiddenWrapper.style.display = "none";
		hiddenWrapper.appendChild(originalOtpInput);
		otpForm.appendChild(hiddenWrapper);

		let otpBoxWrapper = document.createElement("div");
		otpBoxWrapper.classList.add("otp-box-wrapper");
		let label1 = document.createElement("div");
		label1.classList.add("input-lbl");
		label1.innerHTML = "Enter Authentication Code";
		otpBoxWrapper.appendChild(label1);
		otpForm.appendChild(otpBoxWrapper);



		function assignOtpValueToOriginalInput() {
			let allBoxes = document.querySelectorAll(".newOtpInput input");
			let combinedValue = "";
			for (const box of allBoxes) {
				combinedValue += box.value;
			}
			originalOtpInput.value = combinedValue.trim();
		}

		function focusPreviousInput(currentNumber) {
			if (currentNumber > 0) {
				let previousInput = document.getElementById("inp_" + (currentNumber - 1));
				if (previousInput) {
					previousInput.focus();
				}
			}
		}

		function focusNextInput(currentNumber) {
			if (currentNumber < OTP_LENGTH - 1) {
				let nextInput = document.getElementById("inp_" + (currentNumber + 1));
				if (nextInput) {
					nextInput.focus();
				}
			}
		}

		function handleKeyUp(e) {
			if (e.key == "Backspace") {
				this.value = "";
				focusPreviousInput(parseInt(this.getAttribute("index")));
			} else {
				const re = /^[0-9\b]+$/;
				let val = this.value;
				if (re.test(val)) {
					this.value = val;
					assignOtpValueToOriginalInput();
					focusNextInput(parseInt(this.getAttribute("index")))
				} else {
					this.value = "";
				}
			}
		}

		function handleInputFocus(e) {
			this.select();
		}

		function handlePaste(e) {
			let paste = (e.clipboardData || window.clipboardData).getData("text");
			let pasteString = "" + paste;
			let length = pasteString.length;
			for (let i = 0; i < length; i++) {
				let inp = document.getElementById("inp_" + i);
				if (inp) {
					inp.focus();
					inp.value = pasteString.charAt(i);
				}
			}
		}




		let newWrapper = document.createElement("div");
		newWrapper.classList.add("newOtpWrapper");

		for (let count = 0; count < OTP_LENGTH; count++) {
			let otpWrapper = document.createElement("div");
			otpWrapper.classList.add("newOtpInput");
			let newInput = document.createElement("input");
			newInput.classList.add("newOtpInputBox");
			newInput.addEventListener("keyup", handleKeyUp);
			newInput.addEventListener("focus", handleInputFocus);
			newInput.setAttribute("maxlength", 1);
			newInput.setAttribute("index", count);
			newInput.setAttribute("id", "inp_" + count);
			newInput.addEventListener("paste", handlePaste);
			if (count == OTP_LENGTH - 1) {
				newInput.setAttribute("islast", true);
			}
			otpWrapper.appendChild(newInput);
			newWrapper.appendChild(otpWrapper);
		}

		otpBoxWrapper.appendChild(newWrapper);

		let rowContainer = document.createElement("div");
		rowContainer.classList.add("row");
		rowContainer.classList.add("acenter");
		rowContainer.style.marginTop = "20px";
		rowContainer.style.width = "100%";
		rowContainer.innerHTML = "<div class='spacer'></div>";

		let btn = document.createElement("button");
		btn.type = "submit";
		btn.classList.add("login-button");
		btn.innerHTML = "Login";
		rowContainer.appendChild(btn);
		otpForm.appendChild(rowContainer);

		let backtoLogin = document.createElement("a");
		backtoLogin.href = loginUrl;
		backtoLogin.classList.add("backtoLogin");
		backtoLogin.innerHTML = "Back to Login";
		otpForm.appendChild(backtoLogin);
	}

	// let otpSetupForm = document.getElementById("kc-totp-settings-form");
	// if (otpSetupForm) {
	// 	const OTP_LENGTH = 6;
	// 	otpSetupForm.setAttribute("autocomplete", "off");
	// 	let formWrapper = document.querySelector(".kc-config-totp-wrapper");
	// 	let otpInp = document.getElementById("totp")
	// 	console.log(otpInp);

	// 	let originalOtpInput = otpInp.cloneNode(true);

	// 	//clean the existing html
	// 	otpSetupForm.innerHTML = "";

	// 	if (formWrapper.contains(otpSetupForm)) {
	// 		formWrapper.removeChild(otpSetupForm);
	// 	}
	// 	let contentWrapper = document.createElement("div");
	// 	console.log(contentWrapper);
	// 	contentWrapper.innerHTML = "<div id='kc-form'><div id='kc-setup-totp-form-wrapper'></div></div>";
	// 	contentWrapper.querySelector("#kc-setup-totp-form-wrapper").appendChild(otpSetupForm);
	// 	formWrapper.appendChild(contentWrapper);

	// 	console.log(contentWrapper);
	// 	let hiddenWrapper = document.createElement("div");
	// 	hiddenWrapper.style.display = "none";
	// 	hiddenWrapper.appendChild(originalOtpInput);
	// 	otpSetupForm.appendChild(hiddenWrapper);

		

	// 	let otpBoxWrapper = document.createElement("div");
	// 	otpBoxWrapper.classList.add("otp-box-wrapper");
	// 	let label1 = document.createElement("div");
	// 	label1.classList.add("input-lbl");
	// 	label1.innerHTML = "Enter Authentication Code";
	// 	otpBoxWrapper.appendChild(label1);
	// 	otpSetupForm.appendChild(otpBoxWrapper);

	// 	function assignOtpValueToOriginalInput() {
	// 		let allBoxes = document.querySelectorAll(".newOtpInput input");
	// 		let combinedValue = "";
	// 		for (const box of allBoxes) {
	// 			combinedValue += box.value;
	// 		}
	// 		originalOtpInput.value = combinedValue.trim();
	// 	}

	// 	function focusPreviousInput(currentNumber) {
	// 		if (currentNumber > 0) {
	// 			let previousInput = document.getElementById("inp_" + (currentNumber - 1));
	// 			if (previousInput) {
	// 				previousInput.focus();
	// 			}
	// 		}
	// 	}

	// 	function focusNextInput(currentNumber) {
	// 		if (currentNumber < OTP_LENGTH - 1) {
	// 			let nextInput = document.getElementById("inp_" + (currentNumber + 1));
	// 			if (nextInput) {
	// 				nextInput.focus();
	// 			}
	// 		}
	// 	}

	// 	function handleKeyUpOtp(e) {
	// 		if (e.key == "Backspace") {
	// 			this.value = "";
	// 			focusPreviousInput(parseInt(this.getAttribute("index")));
	// 		} else {
	// 			const re = /^[0-9\b]+$/;
	// 			let val = this.value;
	// 			if (re.test(val)) {
	// 				this.value = val;
	// 				assignOtpValueToOriginalInput();
	// 				focusNextInput(parseInt(this.getAttribute("index")))
	// 			} else {
	// 				this.value = "";
	// 			}
	// 		}
	// 	}

	// 	function handleInputFocusOtp(e) {
	// 		this.select();
	// 	}

	// 	function handlePasteOtp(e) {
	// 		let paste = (e.clipboardData || window.clipboardData).getData("text");
	// 		let pasteString = "" + paste;
	// 		let length = pasteString.length;
	// 		for (let i = 0; i < length; i++) {
	// 			let inp = document.getElementById("inp_" + i);
	// 			if (inp) {
	// 				inp.focus();
	// 				inp.value = pasteString.charAt(i);
	// 			}
	// 		}
	// 	}

	// 	let newWrapper = document.createElement("div");
	// 	newWrapper.classList.add("newOtpWrapper");

	// 	for (let count = 0; count < OTP_LENGTH; count++) {
	// 		let otpWrapper = document.createElement("div");
	// 		otpWrapper.classList.add("newOtpInput");
	// 		let newInput = document.createElement("input");
	// 		newInput.classList.add("newOtpInputBox");
	// 		newInput.addEventListener("keyup", handleKeyUpOtp);
	// 		newInput.addEventListener("focus", handleInputFocusOtp);
	// 		newInput.setAttribute("maxlength", 1);
	// 		newInput.setAttribute("index", count);
	// 		newInput.setAttribute("id", "inp_" + count);
	// 		newInput.addEventListener("paste", handlePasteOtp);
	// 		if (count == OTP_LENGTH - 1) {
	// 			newInput.setAttribute("islast", true);
	// 		}
	// 		otpWrapper.appendChild(newInput);
	// 		newWrapper.appendChild(otpWrapper);
	// 	}

	// 	otpBoxWrapper.appendChild(newWrapper);
	// 	let btn = document.createElement("button");
	// 	btn.type = "submit";
	// 	btn.classList.add("login-button");
	// 	btn.innerHTML = "Continue";
	// 	otpSetupForm.appendChild(btn);

	// 	let backtoLogin = document.createElement("a");
	// 	backtoLogin.href = loginUrl;
	// 	backtoLogin.classList.add("backtoLogin");
	// 	backtoLogin.innerHTML = "Back to Login";
	// 	otpSetupForm.appendChild(backtoLogin);
	// }
});