"use strict";
var btnPush = window.document.querySelector('#btnPush');
var mainContainer = window.document.querySelector('#MainContainer');
var mainSection = window.document.querySelector('#main-section');
var mainFigure = window.document.querySelector('#main-figure');
var viewContact = window.document.querySelector('#view-contact');
var btnReturnBack = window.document.querySelector('#returnBack');
var navbar = window.document.querySelector('#navbar');
btnPush === null || btnPush === void 0 ? void 0 : btnPush.addEventListener('click', function () {
    mainSection === null || mainSection === void 0 ? void 0 : mainSection.classList.remove();
    mainSection === null || mainSection === void 0 ? void 0 : mainSection.classList.add('pushViewClass');
    navbar.style.display = 'none';
    mainFigure === null || mainFigure === void 0 ? void 0 : mainFigure.classList.remove();
    mainFigure === null || mainFigure === void 0 ? void 0 : mainFigure.classList.add('showOffFigureClass');
    setTimeout(function () {
        viewContact.style.display = 'flex';
        viewContact.style.flexDirection = 'column';
    }, 1000);
});
btnReturnBack === null || btnReturnBack === void 0 ? void 0 : btnReturnBack.addEventListener('click', function () {
    viewContact.style.display = 'none';
    mainSection === null || mainSection === void 0 ? void 0 : mainSection.className = '';
    mainFigure === null || mainFigure === void 0 ? void 0 : mainFigure.className = '';
    navbar.style.display = 'flex';
});
