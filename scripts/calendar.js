const date = new Date();
const currentMonth = document.getElementById("current-month");
const chevronLeft = document.getElementById("chevron-left");
const chevronRight = document.getElementById("chevron-right");
const calendarGrid = document.getElementsByClassName("calendar-grid");


const div = document.createElement("div");
div.setAttribute("class", "calendar-day");
const a = document.createElement("a");
a.setAttribute("href", "#");





const months = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu"
]


currentMonth.textContent = months[date.getMonth()];

chevronLeft.addEventListener("click", function() {
    date.setMonth(date.getMonth() - 1);
    currentMonth.textContent = months[date.getMonth()];
})

chevronRight.addEventListener("click", function() {
    date.setMonth(date.getMonth() + 1)
    currentMonth.textContent = months[date.getMonth()];
})