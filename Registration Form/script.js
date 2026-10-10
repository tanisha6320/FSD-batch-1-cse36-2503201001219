const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const mobile = document.getElementById("mobile").value.trim();

    const age = document.getElementById("age").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms = document.getElementById("terms").checked;


    // Error elements

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const mobileError = document.getElementById("mobileError");

    const ageError = document.getElementById("ageError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const genderError =
        document.getElementById("genderError");

    const termsError =
        document.getElementById("termsError");


    // Clear old errors

    nameError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    ageError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    genderError.textContent = "";
    termsError.textContent = "";


    let isValid = true;


    // NAME VALIDATION

    if (name === "") {

        nameError.textContent = "Name is required.";
        isValid = false;

    }
    else if (!/^[A-Za-z ]+$/.test(name)) {

        nameError.textContent =
            "Name should contain only letters.";

        isValid = false;
    }


    // EMAIL VALIDATION

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Email is required.";

        isValid = false;

    }
    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Enter a valid email address.";

        isValid = false;
    }


    // MOBILE VALIDATION

    const mobilePattern = /^[0-9]{10}$/;

    if (mobile === "") {

        mobileError.textContent =
            "Mobile number is required.";

        isValid = false;

    }
    else if (!mobilePattern.test(mobile)) {

        mobileError.textContent =
            "Mobile number must contain exactly 10 digits.";

        isValid = false;
    }


    // AGE VALIDATION

    if (age === "") {

        ageError.textContent =
            "Age is required.";

        isValid = false;

    }
    else if (age < 18) {

        ageError.textContent =
            "Age must be 18 or above.";

        isValid = false;
    }


    // GENDER VALIDATION

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    if (!gender) {

        genderError.textContent =
            "Please select your gender.";

        isValid = false;
    }


    // PASSWORD VALIDATION

    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        isValid = false;

    }
    else if (password.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;
    }


    // CONFIRM PASSWORD

    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        isValid = false;

    }
    else if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        isValid = false;
    }


    // TERMS

    if (!terms) {

        termsError.textContent =
            "Please accept the Terms & Conditions.";

        isValid = false;
    }


    // FINAL RESULT

    if (isValid) {

        alert("Registration Successful! 🎉");

        form.reset();
    }

});