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
  content.classList.remove('modal-off')
  document.documentElement.classList.add('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const open = document.querySelector('.round-icon--open')
open.addEventListener('click', function () {
  let content = document.querySelector('.side-menu')
  content.classList.add('modal-off')
  document.documentElement.classList.remove('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.remove('overlay--on')
})
const overlayClose = function (str) {
  let overlay = document.querySelector('.overlay')
  overlay.addEventListener('click', function () {
    let content = str
    content.classList.add('modal-off')
    overlay.classList.remove('overlay--on')
    document.documentElement.classList.remove('lock')
  })
}
const call = document.querySelector('.round-icon--call')
call.addEventListener('click', function () {
  let content = document.querySelector('.modal-callback')
  overlayClose(content)
  content.classList.remove('modal-off')
  let side = document.querySelector('.side-menu')
  side.classList.add('modal-off')
  document.documentElement.classList.add('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const close = document.querySelector('.round-icon--off')
close.addEventListener('click', function () {
  let content = document.querySelector('.modal-callback')
  content.classList.add('modal-off')
  document.documentElement.classList.remove('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.remove('overlay--on')
})

const chat = document.querySelector('.round-icon--chat')
chat.addEventListener('click', function () {
  let content = document.querySelector('.modal-feedback')
  overlayClose(content)
  content.classList.remove('modal-off')
  let side = document.querySelector('.side-menu')
  side.classList.add('modal-off')
  document.documentElement.classList.add('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const closeChat = document.querySelector('.feedback--off')
closeChat.addEventListener('click', function () {
  let content = document.querySelector('.modal-feedback')
  content.classList.add('modal-off')
  document.documentElement.classList.remove('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.remove('overlay--on')
})

const calltab = document.querySelector('.side-call')
calltab.addEventListener('click', function () {
  let content = document.querySelector('.modal-callback')
  overlayClose(content)
  content.classList.remove('modal-off')
  let side = document.querySelector('.side-menu')
  side.classList.add('modal-off')
  document.documentElement.classList.add('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})

const chattab = document.querySelector('.side-chat')
chattab.addEventListener('click', function () {
  let content = document.querySelector('.modal-feedback')
  overlayClose(content)
  content.classList.remove('modal-off')
  let side = document.querySelector('.side-menu')
  side.classList.add('modal-off')
  document.documentElement.classList.add('lock')
  let overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay--on')
})
