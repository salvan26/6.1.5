import '../scss/style.scss'
import '../scss/mobilefirst.scss'
import '../scss/tablet.scss'
import '../scss/desktop.scss'
import './brand-swiper.js'
import './hardware-swiper.js'
import './services-swiper.js'

const burger = document.querySelector('.round-icon--menu')
burger.addEventListener('click', function () {
  let content = document.querySelector('.side-menu')
  content.classList.remove('menu--off')
  document.documentElement.style.overflow = 'hidden'
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const open = document.querySelector('.open--menu')
open.addEventListener('click', function () {
  let content = document.querySelector('.side-menu')
  content.classList.add('menu--off')
  document.documentElement.style.overflow = 'auto'
  let overlay = document.querySelector('.overlay')
  overlay.classList.remove('overlay--on')
})

let overlay = document.querySelector('.overlay')
overlay.addEventListener('click', function () {
  let content = document.querySelector('.side-menu')
  content.classList.add('menu--off')
  overlay.classList.remove('overlay--on')
})

const readMore = document.querySelector('.main__readmore-block')
readMore.addEventListener('click', function () {
  let content = document.querySelector('.main__info')
  if (content.classList.contains('wrapper-show')) {
    content.classList.remove('wrapper-show')
    showMore.textContent = 'Показать все'
  } else {
    content.classList.add('wrapper-show')
    showMore.textContent = 'Скрыть'
  }
})
