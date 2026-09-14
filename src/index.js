// src/index.js
import { aboutLoad, clearPage, contactLoad, menuLoad, pageLoad } from "./page-load.js";
import "./styles.css";

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
  aboutLoad();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click', function () {
  clearPage();
  contactLoad();
});

pageLoad();


