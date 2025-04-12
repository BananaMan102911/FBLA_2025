// 👀 This code makes the mobile navigation menu (the one with the three bars—also called a "hamburger menu"🍔) work.

const menu = document.querySelector('#mobile-menu'); //This grabs the menu button (little three-bar icon) 
//& it looking for element with the ID mobile menu
const menuLinks = document.querySelector('.navbar__menu'); //This grabs the list of links inside the navbar(home, approve post, apply)
//& it's looking for an element with the class .nvabar__menu.

menu.addEventListener('click', function() { //It's saying that "when someone clicks the hamburger menu".
    menu.classList.toggle('is-active'); //It adds or removes a CSS class to show or hide the menu links.
    menuLinks.classList.toggle('active');//toggle just means:
//If the class is there, take it off.
//If the class is not there, put it on.
});
