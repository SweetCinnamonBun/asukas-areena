const chevronDiv = document.querySelector(".chevron-div");
const selectTimeDropDown = document.querySelector(".select-time-dropdown");
const bookingChevronLeft = document.querySelector("#chevron-left-header");
const bookingChevronRight = document.querySelector("#chevron-right-header");
const bookingHeaderH1 = document.querySelector(".booking-header-container h1");
const bookingIconHeader = document.querySelector("#booking-icon-header");
const currentTimeSection = document.querySelector(".current-time-selection");
const blueMark = document.querySelector(".blue-mark");
const showCurrentDatetTimeChildren = document.querySelectorAll(".show-current-datetime div > * ");

const xy = document.querySelectorAll(".full");

xy.forEach(x => {
    x.setAttribute("style", "background-color:#dd482e;");
})


chevronDiv.addEventListener("click", function (event){
    toggleSelectTimeDropDown();
});

bookingChevronLeft.addEventListener("click", () => {
    if (bookingHeaderH1.textContent === "Sauna"){
        bookingHeaderH1.textContent = "Pesutupa";
    document.querySelectorAll(".calendar-day").forEach(x => {
        x.setAttribute("style", "background-color: #9ae69a;");
    });
    bookingIconHeader.setAttribute("class", "fa-solid fa-jug-detergent");
    currentTimeSection.style.background = "linear-gradient(90deg, rgb(13, 123, 30) 29%, rgb(81, 215, 91) 79%)";
    blueMark.style.backgroundColor = "#9ae69a";
    showCurrentDatetTimeChildren.forEach(x => {
        x.style.color = "green";
    });
    xy.forEach(x => {
        x.setAttribute("style", "background-color:#dd482e;");
    })
    
    document.querySelector(".ajanvarauksen-nimi").textContent = "Kaikki pesutupa varaukset";

    } else {
        bookingHeaderH1.textContent = "Sauna";
    document.querySelectorAll(".calendar-day").forEach(x => {
        x.setAttribute("style", "background-color: #9bbef2; ");
    })
    bookingIconHeader.setAttribute("class", "fa-solid fa-shower");
    currentTimeSection.style.background = "linear-gradient( 90deg, rgba(26, 48, 154, 1) 8%, rgba(8, 202, 241, 1) 95% )";
    blueMark.style.backgroundColor = "#9bbef2";
    showCurrentDatetTimeChildren.forEach(x => {
        x.style.color = "#072eff";
    });
    xy.forEach(x => {
        x.setAttribute("style", "background-color:#dd482e;");
    })
    document.querySelector(".ajanvarauksen-nimi").textContent = "Kaikki sauna varaukset";
    }

});

bookingChevronRight.addEventListener("click", () => {
    if (bookingHeaderH1.textContent === "Pesutupa"){
        bookingHeaderH1.textContent = "Sauna";
    document.querySelectorAll(".calendar-day").forEach(x => {
        x.setAttribute("style", "background-color: #9bbef2; ");
    })
    bookingIconHeader.setAttribute("class", "fa-solid fa-shower");
    currentTimeSection.style.background = "linear-gradient( 90deg, rgba(26, 48, 154, 1) 8%, rgba(8, 202, 241, 1) 95% )";
    blueMark.style.backgroundColor = "#9bbef2";
    showCurrentDatetTimeChildren.forEach(x => {
        x.style.color = "#072eff";
    });
    xy.forEach(x => {
        x.setAttribute("style", "background-color:#dd482e;");
    })
    document.querySelector(".ajanvarauksen-nimi").textContent = "Kaikki sauna varaukset";
    }
    else if (bookingHeaderH1.textContent === "Sauna") {
        bookingHeaderH1.textContent = "Pesutupa";
    document.querySelectorAll(".calendar-day").forEach(x => {
        x.setAttribute("style", "background-color: #9ae69a;");
    });
    bookingIconHeader.setAttribute("class", "fa-solid fa-jug-detergent");
    currentTimeSection.style.background = "linear-gradient(90deg, rgb(13, 123, 30) 29%, rgb(81, 215, 91) 79%)";
    blueMark.style.backgroundColor = "#9ae69a";
    showCurrentDatetTimeChildren.forEach(x => {
        x.style.color = "green";
    });
    xy.forEach(x => {
        x.setAttribute("style", "background-color:#dd482e;");
    })
    document.querySelector(".ajanvarauksen-nimi").textContent = "Kaikki pesutupa varaukset";
    }
});


function toggleSelectTimeDropDown() {
    if (selectTimeDropDown.style.display === "block") {
      selectTimeDropDown.style.display = "none";
    } else {
      selectTimeDropDown.style.display = "block";
    }
  }

const popup = document.getElementById("popup");

const varaaAika = document.querySelector(".book-selected-time");

const sulje = document.querySelector(".close-btn");

varaaAika.addEventListener("click", function(event){
    popup.classList.add("open-popup");
});

sulje.addEventListener("click", function(event){
    popup.classList.remove("open-popup");
});