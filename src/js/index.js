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
})

const open = document.querySelector('.open--menu')
open.addEventListener('click', function () {
  let content = document.querySelector('.side-menu')
  content.classList.add('menu--off')
  document.documentElement.style.overflow = 'auto'
})
