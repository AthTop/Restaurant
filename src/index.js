import changePage from "./changepage.js";
import displayHomepage from "./homepage.js";
const content = document.querySelector('#content');
const nav = document.querySelector('nav');

displayHomepage(content);
nav.addEventListener('click', changePage);
