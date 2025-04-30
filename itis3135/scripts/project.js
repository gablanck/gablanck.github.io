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

  donationButtons.forEach((button) => {
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

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}

showSlides(); // ✅ Now it's called AFTER definition


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        
        if (!name || !email || !message) {
          alert("Please fill out all fields before submitting.");
          event.preventDefault();
        }
      });
    }
  });
  
// Function to set up header and footer nav toggles
function setupNavToggles() {
    const headerToggle = document.getElementById('header-nav-toggle');
    const headerLinks = document.getElementById('header-nav-links');
    if (headerToggle && headerLinks) {
      headerToggle.onclick = function() {
        headerLinks.classList.toggle('show');
      };
    }
  
    const footerToggle = document.getElementById('footer-nav-toggle');
    const footerLinks = document.getElementById('footer-nav-links');
    if (footerToggle && footerLinks) {
      footerToggle.onclick = function() {
        footerLinks.classList.toggle('show');
      };
    }
  }
  

