function animateListItems() {
    gsap.to(".loader-text-content ul", {
        y: "-90%",
        ease: "power2.in",
        duration: 6,
        onComplete: function () {
            gsap.to(".loader-text-content ul", { opacity: 0, duration: 1 });
        },
    });
    gsap.to(".pre-loader", { display: "none", delay: 8.2 });
    gsap.to(".slab", {
        y: "-100%",
        duration: 2,
        stagger: 0.3,
        ease: "power2.inOut",
        delay: 6.3,
    });
}
animateListItems();



function clickEventsButtons() {
    const mainContactButton = document.querySelector(".main-contact-button");
    const contactFormMain = document.querySelector(".contact-form");
    const closeForm = document.querySelector(".close-button");
    const backDrop = document.querySelector(".main-text-content");
    mainContactButton.addEventListener("click", function () {
        contactFormMain.classList.add("open");
        backDrop.classList.add("backdrop");
    });
    closeForm.addEventListener("click", function () {
        contactFormMain.classList.remove("open");
        backDrop.classList.remove("backdrop");
    });
}
clickEventsButtons();



function countryCode() {
    const mobileInput = document.querySelector(".mobile_code");
    const iti = window.intlTelInput(mobileInput, {
        initialCountry: "in",
        strictMode: !0,
        separateDialCode: !0,
    });
    const selectedCountryCode = iti.getSelectedCountryData().dialCode;
}
countryCode();


function formValidation() {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission initially

        resetErrors(); // Reset all error states before validating again

        const isEmpty = value => !value.trim();
        const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        let isValid = true;

        const elements = document.querySelectorAll('#contactForm .empty');

        elements.forEach(element => {
            const value = element.value.trim();
            const parentElement = element.parentElement;
            const errorElement = parentElement.querySelector('.error img');

            if (isEmpty(value)) {
                isValid = false;
                if (errorElement) {
                    errorElement.style.display = 'inline-block'; // Show error icon if found
                }
            } else {
                if (errorElement) {
                    errorElement.style.display = 'none'; // Hide error icon if found and field is not empty
                }

                // Special case for email validation
                if (element.id === 'Email' && !isValidEmail(value)) {
                    isValid = false;
                    if (errorElement) {
                        errorElement.style.display = 'inline-block'; // Show error icon for invalid email if found
                    }
                }
            }
        });

        if (isValid) {
            document.getElementById('contactForm').submit(); // Submit the form if all fields are valid
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        const phoneNumberInput = document.getElementById('PhoneNumber');
        phoneNumberInput.addEventListener('input', function () {
            let input = phoneNumberInput.value;

            input = input.replace(/\D/g, '');

            phoneNumberInput.value = input;
        });
    });
}



function resetErrors() {
    const errorElements = document.querySelectorAll('#contactForm .error img');
    errorElements.forEach(errorElement => {
        errorElement.style.display = 'none'; // Hide all error icons initially
    });
}

formValidation();


