document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const coursesContainer = document.getElementById("courses-container");
  const addCourseBtn = document.getElementById("add-course-btn");
  const imageInput = document.getElementById("image");
  const previewImage = document.querySelector("img[alt='default image']");

  imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      previewImage.src = URL.createObjectURL(file);
    }
  });

  function addCourse(abbr = "", name = "", why = "") {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course-entry");

    // Course abbreviation & number
    const abbrInput = document.createElement("input");
    abbrInput.type = "text";
    abbrInput.placeholder = "Course code: e.g. ITIS 3135";
    abbrInput.required = true;
    abbrInput.name = "course-abbr[]";
    abbrInput.value = abbr;

    // Course name
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Course Name";
    nameInput.required = true;
    nameInput.name = "course-name[]";
    nameInput.value = name;

    // Why taking the course
    const whyInput = document.createElement("input");
    whyInput.type = "text";
    whyInput.placeholder = "Why this course?";
    whyInput.required = true;
    whyInput.name = "course-why[]";
    whyInput.value = why;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      coursesContainer.removeChild(courseDiv);
    });

    courseDiv.appendChild(abbrInput);
    courseDiv.appendChild(nameInput);
    courseDiv.appendChild(whyInput);
    courseDiv.appendChild(deleteBtn);
    coursesContainer.appendChild(courseDiv);
  }

  // Add 5 default courses on page load
  const defaultCourses = [
    [
      "ITCS 3160",
      "Database Design and Implementation",
      "Required for concentration."
    ],
    ["ITSC 3155", "Software Engineering", "Required for major."],
    [
      "ITSC 3688",
      "Computers and Their Impact on Society",
      "Required for major."
    ],
    [
      "ITCS 3050",
      "Topics in Computer Science",
      " Computational Thinking and AI Literacy in K-12: Required for scholarship and possible undergraduate research. "
    ],
    ["ITIS 3135", "Web-Based App Design and Dev", "Required for concentration."]
  ];
  defaultCourses.forEach(([abbr, name, why]) => addCourse(abbr, name, why));

  addCourseBtn.addEventListener("click", function () {
    addCourse(); // Adds a blank course when button is clicked
  });

  form.addEventListener("reset", function () {
    setTimeout(() => {
      const resultContainer = document.getElementById("result-container");
      if (resultContainer) {
        resultContainer.remove();
      }
    }, 0);
  });

  function validateForm() {
    const requiredFields = [
      "name",
      "mascot",
      "image-caption",
      "personal-background",
      "professional-background",
      "academic-background",
      "web-dev-background",
      "primary-platform"
    ];
    for (let field of requiredFields) {
      if (!document.getElementById(field).value.trim()) {
        alert(`Please fill out the ${field.replace(/-/g, " ")} field.`);
        return false;
      }
    }

    const imageInput = document.getElementById("image");
    if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
        alert("Image must be a PNG or JPG file.");
        return false;
      }
    }

    if (!document.getElementById("understand-checkbox").checked) {
      alert("You must acknowledge the disclaimer.");
      return false;
    }
    return true;
  }

  function displayResults() {
    const formData = new FormData(form);
    const imageInput = document.getElementById("image");
    const previewImage = document.querySelector("img[alt='default image']");

    // Check if a file was uploaded, otherwise use the default image
    let imageSrc = previewImage.src;
    if (imageInput.files.length > 0) {
      imageSrc = URL.createObjectURL(imageInput.files[0]);
    }

    const abbrs = formData.getAll("course-abbr[]");
    const names = formData.getAll("course-name[]");
    const whys = formData.getAll("course-why[]");

    const coursesList = abbrs
      .map((abbr, index) => {
        return `<li><strong>${abbr} ${names[index]}:</strong> ${whys[index]}</li>`;
      })
      .join("");

    const resultContainer = document.createElement("div");
    resultContainer.id = "result-container";

    resultContainer.innerHTML = `
            <div class="container">
            <h3>${formData.get("name")} | ${formData.get("mascot")}</h3>
            <figure>
                <img src="${imageSrc}" alt="${formData.get("image-caption")}">
                <figcaption><em>${formData.get(
                  "image-caption"
                )}</em></figcaption>
            </figure>
            <div class="list-container">
            <ul>
            <li><strong>Personal Background:</strong> ${formData.get(
              "personal-background"
            )}</li>
            <li><strong>Professional Background:</strong> ${formData.get(
              "professional-background"
            )}</li>
            <li><strong>Academic Background:</strong> ${formData.get(
              "academic-background"
            )}</li>
            <li><strong>Background in Web Development:</strong> ${formData.get(
              "web-dev-background"
            )}</li>
            <li><strong>Primary Computer Platform:</strong> ${formData.get(
              "primary-platform"
            )}</li>
            <li><strong>Courses:</strong></li>
                <ul>
                    ${coursesList}
                </ul>
            <li><strong>Funny Thing:</strong> ${formData.get(
              "funny-thing"
            )}</li>
            <li><strong>Anything Else:</strong> ${formData.get(
              "additional"
            )}</li>
            </ul>
            </div>
            <button onclick="location.reload()">Reset</button>
            </div class="container">
        `;

    form.replaceWith(resultContainer);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) return;
    displayResults();
  });

  document.getElementById("resetButton").addEventListener("click", function () {
    form.reset(); // Resets default values
    document
      .querySelectorAll("form input")
      .forEach((input) => (input.value = "")); // Clears everything
    document.getElementById("courses-container").innerHTML = ""; // Removes all dynamically added courses
  });
});
