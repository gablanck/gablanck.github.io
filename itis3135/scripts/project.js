// Simple script to handle form submission (using AJAX in real-world)
document.addEventListener("DOMContentLoaded", function () {
    const volunteerForm = document.querySelector("#volunteer-form");
  
    if (volunteerForm) {
      volunteerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for signing up to volunteer!");
      });
    }
  });
  