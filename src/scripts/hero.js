import { gsap, CustomEase } from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(CustomEase);

let tl = gsap.timeline();
let tlOnload = gsap.timeline();

let index = 0

const sliderItems = document.querySelectorAll('.o-hero__slider-item')
const banners = document.querySelectorAll('.o-banner')
sliderItems[0].classList.add('is-active')
banners[0].classList.add('is-active')

tlOnload.to(banners[0], {
  duration: 2,
  width: window.innerWidth * 3,
  height: window.innerWidth * 3,
})

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
  }

  const activeInner = sliderItems[index].querySelector('.o-banner__inner')
  const prevInner = sliderItems[prevIndex].querySelector('.o-banner__inner')

  tl.to(banners[index], {
      duration: 2,
      width: window.innerWidth * 3,
      height: window.innerWidth * 3,
    })
    .to(banners[prevIndex], {
      delay: 2,
      duration: 0,
      width: 0,
      height: 0,
    })

  setTimeout(() => {
    sliderItems[prevIndex].classList.remove('is-active')
    banners[prevIndex].classList.remove('is-active')
  }, 1200)
}

if (banners) {
  setInterval(slider, 8000)
}
