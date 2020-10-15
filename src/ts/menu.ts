const btnMenu = window.document.querySelector('#hamburgerMenu')
const menu = window.document.querySelector('#menu-list')
const wpp = window.document.querySelector('#wpp')
const insta = window.document.querySelector('#insta')
const email = window.document.querySelector('#email')
const whatsapp = window.document.querySelector('#whatsapp')
const instagram = window.document.querySelector('#instagram')
const mail = window.document.querySelector('#mail')

let onMenuDisplayed = false

const ShowMenu = () => {
  if (!onMenuDisplayed) {
    menu.style.display = 'flex'
    onMenuDisplayed = true
  } else {
    menu.style.display = 'none'
    onMenuDisplayed = false
  }
}

const CloseMenu = () => {
  if (window.innerWidth > 1245) {
    menu.style.display = 'none'
    onMenuDisplayed = false
  }
}

const SendMessageWpp = () => {
  window.open('https://api.whatsapp.com/send?1=pt+br&phone=5511976708937')
}

const sendEmail = () => {
  window.open('mailto:mg_cacambas@hotmail.com')
}

const openInsta = () => {
  window.open('https://www.instagram.com/mg_cacambas/?igshid=rw1iub57i1as')
}

window.addEventListener('resize', CloseMenu)
btnMenu?.addEventListener('click', ShowMenu)
wpp?.addEventListener('click', SendMessageWpp)
email?.addEventListener('click', sendEmail)
insta?.addEventListener('click', openInsta)
whatsapp?.addEventListener('click', SendMessageWpp)
mail?.addEventListener('click', sendEmail)
instagram?.addEventListener('click', openInsta)

