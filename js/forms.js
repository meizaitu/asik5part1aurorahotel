
"use strict";

function showSuccess(form, visible) {
    const message = document.getElementById(
        form.dataset.successTarget || ""
    );

    if (!message) return;

    message.hidden = !visible;

    if (visible) {
        message.focus();
    }
}

function clearBootstrapValidation(form) {
    form.classList.remove("was-validated");

    form.querySelectorAll(".is-valid, .is-invalid").forEach((field) => {
        field.classList.remove("is-valid", "is-invalid");
    });

    showSuccess(form, false);
}

const registrationForm = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordFeedback = document.getElementById(
    "confirm-password-feedback"
);

function validatePasswords() {
    if (!registrationForm || !passwordInput || !confirmPasswordInput) {
        return;
    }

    const password = passwordInput.value;
    const confirmation = confirmPasswordInput.value;

    confirmPasswordInput.setCustomValidity("");

    if (confirmation.length > 0 && confirmation.length < 8) {
        confirmPasswordFeedback.textContent =
            "Confirm password must be at least 8 characters.";
        return;
    }

    if (confirmation.length > 0 && password !== confirmation) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
        confirmPasswordFeedback.textContent = "Passwords do not match.";
        return;
    }

    confirmPasswordFeedback.textContent =
        "Please repeat the same password.";
}

if (passwordInput && confirmPasswordInput) {
    passwordInput.addEventListener("input", validatePasswords);
    confirmPasswordInput.addEventListener("input", validatePasswords);
}

document.querySelectorAll(".needs-validation").forEach((form) => {
    form.addEventListener("submit", (event) => {
        if (form.id === "registrationForm") {
            validatePasswords();
        }

        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");

        const isValid = form.checkValidity();
        showSuccess(form, isValid);

        if (!isValid) {
            const firstInvalid = form.querySelector(":invalid");

            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    });

    form.addEventListener("reset", () => {
        clearBootstrapValidation(form);

        if (form.id === "registrationForm" && confirmPasswordInput) {
            confirmPasswordInput.setCustomValidity("");
            confirmPasswordFeedback.textContent =
                "Please repeat the same password.";
        }

        window.setTimeout(() => {
            clearBootstrapValidation(form);
        }, 0);
    });
});
