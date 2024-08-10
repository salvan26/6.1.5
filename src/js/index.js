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
  overlayClose(content)
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
const overlayClose = function (str) {
  let overlay = document.querySelector('.overlay')
  overlay.addEventListener('click', function () {
    console.log('click')
    let content = str
    content.classList.add('menu--off')
    overlay.classList.remove('overlay--on')
  })
}
const call = document.querySelector('.button-call')
call.addEventListener('click', function () {
  let content = document.querySelector('.modal-callback')
  overlayClose(content)
  content.classList.remove('menu--off')
  document.documentElement.style.overflow = 'hidden'
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const close = document.querySelector('.modal__off')
close.addEventListener('click', function () {
  let content = document.querySelector('.modal-callback')
  content.classList.add('menu--off')
  document.documentElement.style.overflow = 'auto'
  let overlay = document.querySelector('.overlay')
  overlay.classList.remove('overlay--on')
})
