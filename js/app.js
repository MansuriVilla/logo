function animateListItems() {
  gsap.to(".loader-text-content ul", {
    y: "-90%",
    ease: "power2.in",
    duration: 6,
    onComplete: function () {
      gsap.to(".loader-text-content ul", {
        opacity: 0,
        duration: 1,
      });
    },
  });

  gsap.to(".pre-loader", {
    display: "none",
    delay: 8,
  });

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
    strictMode: true,
    separateDialCode: true,
  });

  const selectedCountryCode = iti.getSelectedCountryData().dialCode;
}
countryCode();
