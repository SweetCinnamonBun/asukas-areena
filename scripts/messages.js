const ellipsis = document.querySelector("#messages-ellipsis");
const dropDownContent = document.querySelector(".ellipsis-dropdown");
const sort = document.querySelector("#sort-icon");
const sortDropDownContent = document.querySelector(".sort-dropdown-content")

ellipsis.addEventListener("click", function (event) {
    toggleDropdownEllipsis();
    event.stopPropagation(); // Prevent the click event from propagating to the window
  });

sort.addEventListener("click", function (event) {
    toggleDropdownSort();
    event.stopPropagation(); // Prevent the click event from propagating to the window
  });




function toggleDropdownEllipsis() {
    if (dropDownContent.style.display === "block") {
      dropDownContent.style.display = "none";
    } else {
      dropDownContent.style.display = "block";
    }
  }

function toggleDropdownSort() {
    if (sortDropDownContent.style.display === "block") {
        sortDropDownContent.style.display = "none";
      } else {
        sortDropDownContent.style.display = "block";
      }
}


  window.addEventListener("click", function (event) {
    if (
      !event.target.matches("#messages-ellipsis") &&
      !event.target.closest(".ellipsis-dropdown")
    ) {
      dropDownContent.style.display = "none";
    }

    if (
        !event.target.matches("#sort-icon") &&
        !event.target.closest(".sort-dropdown-content")
      ) {
        sortDropDownContent.style.display = "none";
      }


  });
  