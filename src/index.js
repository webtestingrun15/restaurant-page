// src/index.js
import { clearPage, contactLoad, menuLoad, pageLoad } from "./page-load";
import "./styles.css";
// import { aboutDiv, contactDiv, heroDiv, menuDiv } from "./index.js";

const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', function() {
  clearPage();
  pageLoad();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener('click', function () {
  clearPage();
  menuLoad();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click', function () {
  clearPage();
  contactLoad();
});

pageLoad();


