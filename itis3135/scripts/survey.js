document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const addCourseButton = document.getElementById("add-course");
    const courseContainer = document.getElementById("courses-container");

    function displayResults() {
        const formData = new FormData(form);
        let output = "<h2>Your Introduction Page</h2>";
        formData.forEach((value, key) => {
            output += `<p><strong>${key}:</strong> ${value}</p>`;
        });
        document.body.innerHTML = output + '<br><button id="reset-form">Reset</button>';
        document.getElementById("reset-form").addEventListener("click", function () {
            location.reload();
        });
    }

    form.addEventListener("submit", function (event) {
        const requiredFields = document.querySelectorAll("[required]");
        let valid = true;
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                valid = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "";
            }
        });
        if (!valid) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        } else {
            event.preventDefault();
            displayResults();
        }
    });

    document.getElementById("reset").addEventListener("click", function () {
        form.reset();
        courseContainer.innerHTML = "";
    });

    if (addCourseButton) {
        addCourseButton.addEventListener("click", function () {
            const courseEntry = document.createElement("div");
            courseEntry.classList.add("course-entry");

            const courseInput = document.createElement("input");
            courseInput.type = "text";
            courseInput.placeholder = "Enter course name";
            courseInput.classList.add("course-input");

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";
            deleteButton.type = "button";
            deleteButton.classList.add("delete-course");
            deleteButton.addEventListener("click", function () {
                courseContainer.removeChild(courseEntry);
            });

            courseEntry.appendChild(courseInput);
            courseEntry.appendChild(deleteButton);
            courseContainer.appendChild(courseEntry);
        });
    }

    
});
