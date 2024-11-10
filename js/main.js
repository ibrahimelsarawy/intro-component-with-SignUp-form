document.getElementById("signUpForm").addEventListener("click", function () {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let formIsValid = true;

    if (firstName.value.trim() === "") {
        displayError(firstName);
        formIsValid = false;
    } else {
        document.getElementById("firstNameError").style.display = "none";
        firstName.classList.remove("error-picture");
    }

    if (lastName.value.trim() === "") {
        displayError(lastName);
        formIsValid = false;
    } else {
        document.getElementById("lastNameError").style.display = "none";
        lastName.classList.remove("error-picture");
    }

    if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
        displayError(email, "Looks like this is not an email");
        formIsValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
        email.classList.remove("error-picture");
    }

    if (password.value.trim() === "") {
        displayError(password);
        formIsValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
        password.classList.remove("error-picture");
    }

    if (formIsValid) {
        alert("Successful Sign-Up!");
    }
});

function displayError(element, message = "") {
    const errorSpan = element.parentElement.querySelector("span");
    if (message) {
        errorSpan.innerText = message;
    }
    errorSpan.style.display = "flex";
    element.classList.add("error-picture");
    element.placeholder = "";
}

document.getElementById("email").addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById("emailError");
    
    if (emailPattern.test(this.value.trim())) {
        emailError.style.display = "none";
        this.classList.remove("error-picture");
        this.style.color = "initial";
    } else {
        displayError(this, "Looks like this is not an email");
    }
});

const fields = ["firstName", "lastName", "password"];
fields.forEach(id => {
    document.getElementById(id).addEventListener("input", function () {
        this.classList.remove("error-picture");
        const errorSpan = document.getElementById(id + "Error");
        if (errorSpan) {
            errorSpan.style.display = "none";
        }
    });
});
