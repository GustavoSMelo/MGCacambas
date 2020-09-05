const btnPush = window.document.querySelector('#btnPush')
const mainContainer = window.document.querySelector('#MainContainer')
const mainSection = window.document.querySelector('#main-section')
const mainFigure = window.document.querySelector('#main-figure')
const viewContact = window.document.querySelector('#view-contact')
const btnReturnBack = window.document.querySelector('#returnBack')
const navbar = window.document.querySelector('#navbar')

btnPush?.addEventListener('click', () => {
  if (window.innerHeight <= 767) {
    mainContainer.style.marginTop = '0px'
  }
  mainSection?.classList.remove()
  mainSection?.classList.add('pushViewClass')

  navbar.style.display = 'none'

  mainFigure?.classList.remove()
  mainFigure?.classList.add('showOffFigureClass')
  setTimeout(() => {
    viewContact.style.display = 'flex'
    viewContact.style.flexDirection = 'column'
  }, 1000)
})

btnReturnBack?.addEventListener('click', () => {
  viewContact.style.display = 'none'

  mainSection?.className = ''
  mainFigure?.className = ''
  navbar.style.display = 'flex'
})
