const ellipsis = document.querySelector("#messages-ellipsis");
const dropDownContent = document.querySelector(".ellipsis-dropdown");
const sort = document.querySelector("#sort-icon");
const sortDropDownContent = document.querySelector(".sort-dropdown-content")
const messageModal = document.querySelector(".new-message-modal");
const openMessageModal = document.querySelector(".write-message");
const openMessageModal2 = document.querySelector(".write-new-message-button");
const closeMessageModal = document.querySelector(".close-modal");
const closeMessageModal2 = document.querySelector("#send-message");
const serviceModal = document.querySelector(".new-service-modal");
const openServiceModal = document.querySelector(".write-new-service-button");
const closeServiceModal = document.querySelector(".close-service-modal");
const openServiceModal2 = document.querySelector(".write-new-service-button-desktop");
const closeServiceModal2 = document.querySelector(".service-send-button");


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
  

openMessageModal.addEventListener("click", () => {
  messageModal.showModal();
});

openMessageModal2.addEventListener("click", () => {
  messageModal.showModal();
});

closeMessageModal.addEventListener("click", () => {
  messageModal.close();
})

closeMessageModal2.addEventListener("click", () => {
  messageModal.close();
})


openServiceModal.addEventListener("click", () => {
  serviceModal.showModal();
})

openServiceModal2.addEventListener("click", () => {
  serviceModal.showModal();
})

closeServiceModal.addEventListener("click", () => {
  serviceModal.close();
})

closeServiceModal2.addEventListener("click", () => {
  serviceModal.close();
})