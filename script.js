
/* Project 04 - Personal Portfolio */
/* Theme Switcher and Contact Form */

// 1. Select the Theme Button

const themeButton = document.getElementById("theme-toggle");

// 2. Create Theme Switcher Function

function toggleTheme() {

    const isDark = document.body.classList.toggle("dark-theme");

    if (isDark) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

    themeButton.setAttribute(
        "aria-pressed",
        String(isDark)
    );

    console.log("Dark Mode Active:", isDark);
}

// 3. Handle Theme Button Click

themeButton.addEventListener("click", toggleTheme);


// 4. Select Contact Form Elements

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");


// 5. Handle Contact Form Submission

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check for empty fields

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    // Replace this with your real email address

    const recipient = "your.email@example.com";

    if (recipient === "your.email@example.com") {
        formStatus.textContent =
            "Please configure your contact email first.";
        return;
    }

    // Prepare an email draft

    const subject = encodeURIComponent(
        "Portfolio message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formStatus.textContent =
        "Opening your email application. Please send the draft.";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;
});
