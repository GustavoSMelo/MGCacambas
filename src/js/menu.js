var btnMenu = window.document.querySelector('#hamburgerMenu');
var menu = window.document.querySelector('#menu-list');
var onMenuDisplayed = false;
var ShowMenu = function () {
    if (!onMenuDisplayed) {
        menu.style.display = 'flex';
        onMenuDisplayed = true;
    }
    else {
        menu.style.display = 'none';
        onMenuDisplayed = false;
    }
};
var CloseMenu = function () {
    if (window.innerWidth > 1245) {
        menu.style.display = 'none';
        onMenuDisplayed = false;
    }
};
window.addEventListener('resize', CloseMenu);
btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', ShowMenu);
