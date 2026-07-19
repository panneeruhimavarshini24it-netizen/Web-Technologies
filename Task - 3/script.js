const form =
    document.getElementById("registrationForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const fullName =
        document.getElementById("fullName").value.trim();


    const rollNumber =
        document.getElementById("rollNumber").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const mobile =
        document.getElementById("mobile").value.trim();


    const password =
        document.getElementById("password").value;


    const confirmPassword =
        document.getElementById("confirmPassword").value;


    const department =
        document.getElementById("department").value;


    const dob =
        document.getElementById("dob").value;


    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    // Clear old errors

    document.querySelectorAll("small")
        .forEach(error => error.textContent = "");


    document.getElementById("successMessage")
        .textContent = "";


    let isValid = true;


    // Full Name

    if (fullName === "") {

        document.getElementById("nameError")
            .textContent = "Please enter your full name.";

        isValid = false;
    }


    // Roll Number

    const rollPattern = /^[A-Za-z0-9]+$/;


    if (!rollPattern.test(rollNumber)) {

        document.getElementById("rollError")
            .textContent =
            "Only letters and numbers are allowed.";

        isValid = false;
    }


    // Email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        document.getElementById("emailError")
            .textContent =
            "Enter a valid email address.";

        isValid = false;
    }


    // Mobile

    const mobilePattern =
        /^[0-9]{10}$/;


    if (!mobilePattern.test(mobile)) {

        document.getElementById("mobileError")
            .textContent =
            "Enter exactly 10 digits.";

        isValid = false;
    }


    // Password

    if (password.length < 8) {

        document.getElementById("passwordError")
            .textContent =
            "Password must contain at least 8 characters.";

        isValid = false;
    }


    // Confirm Password

    if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError")
            .textContent =
            "Passwords do not match.";

        isValid = false;
    }


    // Gender

    if (!gender) {

        document.getElementById("genderError")
            .textContent =
            "Please select your gender.";

        isValid = false;
    }


    // Department

    if (department === "") {

        document.getElementById("departmentError")
            .textContent =
            "Please select your department.";

        isValid = false;
    }


    // DOB

    if (dob === "") {

        document.getElementById("dobError")
            .textContent =
            "Please select your date of birth.";

        isValid = false;
    }


    // SUCCESS

    if (isValid) {

        document.getElementById("successMessage")
            .textContent =
            "🎉 Student profile created successfully!";

        form.reset();

        document.getElementById("strengthBar")
            .style.width = "0%";
    }

});


// PASSWORD STRENGTH

document.getElementById("password")
    .addEventListener("input", function() {

        const password = this.value;

        const strengthBar =
            document.getElementById("strengthBar");


        if (password.length === 0) {

            strengthBar.style.width = "0%";

        } else if (password.length < 8) {

            strengthBar.style.width = "35%";

        } else if (password.length < 12) {

            strengthBar.style.width = "65%";

        } else {

            strengthBar.style.width = "100%";
        }

    });


// SHOW / HIDE PASSWORD

function togglePassword(id, button) {

    const password =
        document.getElementById(id);


    if (password.type === "password") {

        password.type = "text";

        button.textContent = "Hide";

    } else {

        password.type = "password";

        button.textContent = "Show";
    }

}
