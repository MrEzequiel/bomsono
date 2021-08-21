const toggleMenu = {
  toggle() {
    document.querySelector('.info').classList.toggle('show')
  },
  close() {
    document.querySelector('.info').classList.remove('show')
  },
  open() {
    document.querySelector('.info').classList.add('show')
  }
}

const showBackToTop = () => {
  const backToTop = document.querySelector('.back-to-top')

  window.scrollY <= 300
    ? backToTop.classList.remove('active')
    : backToTop.classList.add('active')
}

document
  .querySelector('.menu span')
  .addEventListener('click', toggleMenu.toggle)

document.querySelectorAll('.list-info li').forEach(list => {
  list.addEventListener('click', toggleMenu.close)
})

window.addEventListener('scroll', showBackToTop)
