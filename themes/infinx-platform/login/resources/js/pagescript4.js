function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }
r(function () {
	let otpForm = document.getElementById("kc-otp-login-form");
	console.log(otpForm);
	if (otpForm) {
		//we are on the enter otp page
		//generate the OTP UI inside the form element

		const OTP_LENGTH = 6;
		otpForm.setAttribute("autocomplete", "off");
		function getResourcesPath() {
			let logo = document.querySelector(".welcome-image img")
			let r = logo.getAttribute("src");
			let base = r.substring(0, r.indexOf("/img"));
			return base;
		}
		let formWrapper = document.querySelector(".kc-content-wrapper");
		let otpInp = document.getElementById("otp");
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


		// let topSection = document.createElement("div");
		// topSection.classList.add("top-section");
		// let base = getResourcesPath();
		// topSection.innerHTML = `<img src=${base}/img/uservector.png alt="user input"/><div class="login-subtitle">Login</div>`;
		// otpForm.appendChild(topSection);
		// let instructions = document.createElement("div");
		// instructions.innerText = "Enter the authentication code to complete sign-in.";
		// instructions.classList.add("otp-ins");
		// topSection.appendChild(instructions);

		let hiddenWrapper = document.createElement("div");
		hiddenWrapper.style.display = "none";
		hiddenWrapper.appendChild(originalOtpInput);
		otpForm.appendChild(hiddenWrapper);

		let label1 = document.createElement("div");
		label1.classList.add("input-lbl");
		label1.innerHTML = "Enter Authentication Code";
		otpForm.appendChild(label1);

		
		

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

		otpForm.appendChild(newWrapper);

		let rowContainer = document.createElement("div");
		rowContainer.classList.add("row");
		rowContainer.classList.add("acenter");
		rowContainer.style.marginTop = "50px";
		rowContainer.innerHTML = "<div class='spacer'></div>";

		let btn = document.createElement("button");
		btn.type = "submit";
		btn.classList.add("login-button");
		btn.innerHTML = "Login";
		rowContainer.appendChild(btn);
		otpForm.appendChild(rowContainer);
	}
});