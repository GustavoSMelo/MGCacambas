const btnPush = window.document.querySelector('#btnPush')
const mainSection = window.document.querySelector('#main-section')
const mainFigure = window.document.querySelector('#main-figure')
const viewContact = window.document.querySelector('#view-contact')
const btnReturnBack = window.document.querySelector('#returnBack')

btnPush?.addEventListener('click', () => {
  mainSection?.classList.remove()
  mainSection?.classList.add('pushViewClass')

  mainFigure?.classList.remove()
  mainFigure?.classList.add('showOffFigureClass')

  setTimeout(() => { viewContact.style.display = 'flex' }, 1000)
})

btnReturnBack?.addEventListener('click', () => {
  viewContact.style.display = 'none'

  mainSection?.className = ""
  mainFigure?.className = ""
})
