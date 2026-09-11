import { aboutDiv, contactDiv } from "./contact.js";
import { menuDiv } from "./menu.js";
import veggiesImg from "/img/chopping-veggies.jpg";
export { clearPage, contactLoad, menuLoad, pageLoad };

const contentDiv = document.querySelector(`#content`);

const pageLoad = () => {
    contentDiv.innerHTML = heroDiv;
}

const menuLoad = ()=> {
    contentDiv.innerHTML = menuDiv;
}

const contactLoad = () => {
    contentDiv.innerHTML = contactDiv + aboutDiv;
}

const clearPage = () => {
   contentDiv.textContent = "";
}

const heroDiv =
  `<div class="hero">
        <h1>Food Cooked from the Garden</h1>
        <img src="${veggiesImg}" alt="Chef Chopping Vegetables on Cutting board">
        <p class="intro">Welcome to the Garden Eatery. Enjoy our delicious food straight from the earth. Served to
        your dish freshly planted.</p>
    </div>`;



