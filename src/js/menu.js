var btnMenu = window.document.querySelector('#hamburgerMenu');
var menu = window.document.querySelector('#menu-list');
var wpp = window.document.querySelector('#wpp');
var insta = window.document.querySelector('#insta');
var email = window.document.querySelector('#email');
var whatsapp = window.document.querySelector('#whatsapp');
var instagram = window.document.querySelector('#instagram');
var mail = window.document.querySelector('#mail');
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
var SendMessageWpp = function () {
    window.open('https://api.whatsapp.com/send?1=pt+br&phone=5511976708937');
};
var sendEmail = function () {
    window.open('mailto:mg_cacambas@hotmail.com');
};
var openInsta = function () {
    window.open('https://www.instagram.com/mg_cacambas/?igshid=rw1iub57i1as');
};
window.addEventListener('resize', CloseMenu);
btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', ShowMenu);
wpp === null || wpp === void 0 ? void 0 : wpp.addEventListener('click', SendMessageWpp);
email === null || email === void 0 ? void 0 : email.addEventListener('click', sendEmail);
insta === null || insta === void 0 ? void 0 : insta.addEventListener('click', openInsta);
whatsapp === null || whatsapp === void 0 ? void 0 : whatsapp.addEventListener('click', SendMessageWpp);
mail === null || mail === void 0 ? void 0 : mail.addEventListener('click', sendEmail);
instagram === null || instagram === void 0 ? void 0 : instagram.addEventListener('click', openInsta);
