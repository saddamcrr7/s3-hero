import { gsap, CustomEase, ExpoScaleEase } from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(CustomEase, ExpoScaleEase);


let index = 0

const sliderItems = document.querySelectorAll('.o-hero__slider-item')
const banners = document.querySelectorAll('.o-banner')


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

  setTimeout(() => {
    sliderItems[prevIndex].classList.remove('is-active')
    banners[prevIndex].classList.remove('is-active')
  }, 1200)

  let tl = gsap.timeline();

  const activeInner = sliderItems[index].querySelector('.o-banner__inner')
  const prevInner = sliderItems[prevIndex].querySelector('.o-banner__inner')


  tl.to(banners[index], {
      duration: 2,
      width: window.innerWidth * 3,
      height: window.innerWidth * 3,
    })
    .to(activeInner, {
      delay: -2,
      duration: 1.5,
      scale: 1.1,
      ease: "expoScale(1.1, 1.07, power3.out)",

    })
    .to(activeInner, {
      delay: -.5,
      duration: 4,
      scale: 1.2,
      ease: "expoScale(1.07, 1.2)",
    })
    .to(activeInner, {
      delay: .2,
      duration: 2.1,
      scale: 7,
      ease: "expoScale(1.2, 7)",
    })
    .to(prevInner, {
      delay: -4,
      duration: 0,
      scale: 1,
    })
    .to(banners[prevIndex], {
      delay: 2,
      duration: 0,
      width: 0,
      height: 0,
    })


}

slider()

if (banners) {
  setInterval(slider, 6000)
}
