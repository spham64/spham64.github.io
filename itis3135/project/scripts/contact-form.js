document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  function showMessage(message, type) {
    messageDiv.textContent = message;
    if (type === "success") {
      messageDiv.style.color = "green";
    } else {
      messageDiv.style.color = "red";
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop normal form submission

    const formData = new FormData(form);

    fetch("/submit-form", {
      method: "POST",
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          showMessage("Message sent successfully!", "success");
          form.reset();
        } else {
          showMessage("There was a problem sending your message.", "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        showMessage("An error occurred while sending your message.", "error");
      });
  });
});
