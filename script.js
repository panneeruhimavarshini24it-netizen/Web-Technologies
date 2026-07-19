
/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get input values
    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const subject = subjectInput.value.trim();

    const message = messageInput.value.trim();


    // Reset previous validation
    clearErrors();


    let isValid = true;


    /* =========================
       NAME VALIDATION
    ========================= */

    if (name === "") {

        showError(
            nameInput,
            "nameError",
            "Name cannot be empty."
        );

        isValid = false;

    } else {

        showSuccess(nameInput);

    }


    /* =========================
       EMAIL VALIDATION
    ========================= */

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (email === "") {

        showError(
            emailInput,
            "emailError",
            "Email cannot be empty."
        );

        isValid = false;

    }

    else if (!emailPattern.test(email)) {

        showError(
            emailInput,
            "emailError",
            "Please enter a valid email address."
        );

        isValid = false;

    }

    else {

        showSuccess(emailInput);

    }


    /* =========================
       SUBJECT VALIDATION
    ========================= */

    if (subject.length < 5) {

        showError(
            subjectInput,
            "subjectError",
            "Subject must contain at least 5 characters."
        );

        isValid = false;

    } else {

        showSuccess(subjectInput);

    }


    /* =========================
       MESSAGE VALIDATION
    ========================= */

    if (message.length < 20) {

        showError(
            messageInput,
            "messageError",
            "Message must contain at least 20 characters."
        );

        isValid = false;

    } else {

        showSuccess(messageInput);

    }


    /* =========================
       SUCCESSFUL SUBMISSION
    ========================= */

    if (isValid) {

        alert("Message Sent Successfully");

        contactForm.reset();

        clearErrors();

    }

});


/* =========================
   SHOW ERROR FUNCTION
========================= */

function showError(input, errorId, message) {

    input.classList.add("error");

    input.classList.remove("success");


    document.getElementById(errorId).textContent = message;

}


/* =========================
   SHOW SUCCESS FUNCTION
========================= */

function showSuccess(input) {

    input.classList.add("success");

    input.classList.remove("error");

}


/* =========================
   CLEAR ERRORS FUNCTION
========================= */

function clearErrors() {

    const inputs = [
        nameInput,
        emailInput,
        subjectInput,
        messageInput
    ];


    inputs.forEach(function (input) {

        input.classList.remove("error");

        input.classList.remove("success");

    });


    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("subjectError").textContent = "";

    document.getElementById("messageError").textContent = "";

}