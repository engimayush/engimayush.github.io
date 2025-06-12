// Tab navigation functionality
const buttons = document.querySelectorAll(".tab button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Smooth scroll functionality for back to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopLink = document.querySelector(".back-to-top a");
  if (backToTopLink) {
    backToTopLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }
});
