import displayHomepage from "./homepage.js";
import displayAboutPage from "./about.js";
import displayMenu from "./menu.js";


export default (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const content = document.querySelector('#content');
        content.textContent = '';
        if (e.target.id === 'home') displayHomepage(content);
        if (e.target.id === 'menu') displayMenu(content);
        if (e.target.id === 'about') displayAboutPage(content);
    };
};  