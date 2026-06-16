import '../scss/main.scss';
import '../scss/main.scss';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import './posts.js';


const fpFrom = flatpickr("#date-from", {
  dateFormat: "d-m-Y",
  onChange: (selectedDates) => {
    fpTo.set("minDate", selectedDates[0] || null);
  },
});

const fpTo = flatpickr("#date-to", {
  dateFormat: "d-m-Y",
  onChange: (selectedDates) => {
    fpFrom.set("maxDate", selectedDates[0] || null);
  },
});

// toggle view
const postsList = document.getElementById('posts-list');
const btnGrid = document.getElementById('btn-grid');
const btnList = document.getElementById('btn-list');

// datepicker activation after click on calendar-btn
document.querySelector("#date-from-btn").addEventListener("click", () => {
  fpFrom.open();
});

document.querySelector("#date-to-btn").addEventListener("click", () => {
  fpTo.open();
});


// clear input fields
document.querySelector("#date-from-btn-clear").addEventListener("click", () => {
  fpFrom.clear();
  fpTo.set("minDate", null);
});

document.querySelector("#date-to-btn-clear").addEventListener("click", () => {
  fpTo.clear();
  fpFrom.set("maxDate", null);
});

btnGrid.addEventListener('click', () => {
    postsList.classList.remove('-list');
    postsList.classList.add('-grid');

    btnGrid.classList.add('active');
    btnList.classList.remove('active');
});

btnList.addEventListener('click', () => {
    postsList.classList.remove('-grid');
    postsList.classList.add('-list');

    btnList.classList.add('active');
    btnGrid.classList.remove('active');
});