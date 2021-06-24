const sliderItems = document.querySelectorAll('.o-hero__slider-item')
const banners = document.querySelectorAll('.o-banner')
let index = 0
sliderItems[0].classList.add('is-active')
banners[0].classList.add('is-active')

function slider() {
  index++

  if (index == sliderItems.length) {
    index = 0
  }

  sliderItems[index].classList.add('is-active')
  banners[index].classList.add('is-active')

  let prevIndex = index - 1

  if (prevIndex == -1) {
    prevIndex = sliderItems.length - 1

    sliderItems[prevIndex].classList.remove('is-active')
    banners[prevIndex].classList.remove('is-active')
  }

  setTimeout(() => {
    sliderItems[prevIndex].classList.remove('is-active')
    banners[prevIndex].classList.remove('is-active')
  }, 1000)
}


setInterval(slider, 4000)
