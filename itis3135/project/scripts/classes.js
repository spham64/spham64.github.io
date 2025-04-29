document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const heading = dropdown.querySelector("h3");
    const paragraph = dropdown.querySelector("p");
    const arrow = heading.querySelector(".arrow");

    paragraph.style.display = "none"; // Start hidden
    heading.style.cursor = "pointer";

    heading.addEventListener("click", function () {
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        arrow.setAttribute("data-state", "open");
      } else {
        paragraph.style.display = "none";
        arrow.setAttribute("data-state", "closed");
      }
    });
  });
});
