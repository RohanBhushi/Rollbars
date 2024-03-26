"use strict";

// console.log("Hi");

const checkbox = document.getElementById("check");
const crossIcon = document.querySelector(".crossbtn");
const hamIcon = document.querySelector(".hambtn");
const tabLinks = document.querySelector(".tab_links");
const btnLinks = document.querySelector(".button_links");
const btnDummyLinks = document.querySelector(".button_links_dummy");

checkbox.addEventListener("click", function () {
  //   console.log("hello...!");

  if (checkbox.checked) {
    hamIcon.style.display = "none";
    crossIcon.style.display = "block";
    tabLinks.style.left = "0";
    btnLinks.style.left = "40%";
    // btnDummyLinks.style.display = "block";
  } else {
    hamIcon.style.display = "block";
    crossIcon.style.display = "none";
    tabLinks.style.left = "-100%";
    btnLinks.style.left = "-100%";
  }
});
