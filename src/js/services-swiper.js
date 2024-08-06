import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia('(max-width: 767px)')

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 760px)', '.swiper-container2', {
    direction: 'horizontal',
    loop: true,
    loopedSlides: 11,
    slidesPerView: 'auto',
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    }
  })
})
