document.addEventListener("DOMContentLoaded", function () {
  const volunteerButton = document.querySelector(".cta-btn.volunteer");
  const volunteerModal = document.querySelector("#volunteer-modal");
  const closeVolunteerModal = document.querySelector("#close-volunteer-modal");
  const volunteerForm = document.querySelector("#volunteer-form");

  if (volunteerButton) {
      volunteerButton.addEventListener("click", function () {
          volunteerModal.style.display = "block";
      });
  }

  if (closeVolunteerModal) {
      closeVolunteerModal.addEventListener("click", function () {
          volunteerModal.style.display = "none";
      });
  }

  if (volunteerForm) {
      volunteerForm.addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for signing up to volunteer!");
          volunteerModal.style.display = "none";
      });
  }

  const donationButtons = document.querySelectorAll(".donate-btn");
  const customAmountInput = document.querySelector("#custom-amount");
  const donationForm = document.querySelector("#donation-form");
  const donateModal = document.querySelector("#donate-modal");
  const closeDonateModal = document.querySelector("#close-donate-modal");

  if (donateModal) {
      donateModal.style.display = "none";
  }

  donationButtons.forEach(button => {
      button.addEventListener("click", function () {
          customAmountInput.value = this.getAttribute("data-amount");
      });
  });

  if (donationForm) {
      donationForm.addEventListener("submit", function (e) {
          e.preventDefault();
          if (customAmountInput.value.trim() !== "") {
              donateModal.style.display = "block";
              customAmountInput.value = "";
          } else {
              alert("Please enter a donation amount.");
          }
      });
  }

  if (closeDonateModal) {
      closeDonateModal.addEventListener("click", function () {
          donateModal.style.display = "none";
      });
  }
});
