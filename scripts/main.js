// Get the button and dropdown content
const button = document.querySelector(".dropdown-button");
const dropdown = document.querySelector(".dropdown-content");

// Add a click event listener to the button and its child elements
button.addEventListener("click", function (event) {
  toggleDropdown();
  event.stopPropagation(); // Prevent the click event from propagating to the window
});

// Function to toggle the dropdown's display property
function toggleDropdown() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  if (
    !event.target.matches(".dropdown-button") &&
    !event.target.closest(".dropdown-content")
  ) {
    dropdown.style.display = "none";
  }
});
