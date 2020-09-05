const btnMenu = window.document.querySelector('#hamburgerMenu')
const menu = window.document.querySelector('#menu-list')
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

window.addEventListener('resize', CloseMenu)
btnMenu?.addEventListener('click', ShowMenu)
