import { gsap, CustomEase, ExpoScaleEase } from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(CustomEase, ExpoScaleEase);


let index = -1

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
  }, 2000)

  let tl = gsap.timeline();

  const activeInner = sliderItems[index].querySelector('.o-banner__inner')
  const prevInner = sliderItems[prevIndex].querySelector('.o-banner__inner')
  const activeInnerImage = sliderItems[index].querySelector('.o-banner__image')
  const prevInnerImage = sliderItems[prevIndex].querySelector('.o-banner__image')
  const activeInnerContent = sliderItems[index].querySelector('.o-banner__content')
  const prevInnerContent = sliderItems[prevIndex].querySelector('.o-banner__content')

  tl.to(banners[index], {
      duration: 2,
      width: window.innerWidth * 3,
      height: window.innerWidth * 3,
    })
    .to(activeInnerImage, {
      delay: -2,
      duration: 1.5,
      scale: 1.1,
      ease: "expoScale(1, 1.1, power3.out)",
    })
    .to(activeInnerContent, {
      delay: -2,
      duration: 1.5,
      scale: 1,
      ease: "expoScale(0.9, 1, power3.out)",
    })
    .to(activeInnerImage, {
      delay: -.5,
      duration: 4.5,
      scale: 1.2,
      ease: "expoScale(1.1, 1.2)",
    })
    .to(activeInner, {
      duration: 2,
      scale: 7,
      ease: "expoScale(1, 7)",
    })
    .to(prevInner, {
      delay: -4,
      duration: 0,
      scale: 1,
    })
    .to(prevInnerImage, {
      duration: 0,
      scale: 1,
    })
    .to(prevInnerContent, {
      duration: 0,
      scale: .9,
    })
    .to(banners[prevIndex], {
      delay: 2,
      duration: 0,
      width: 0,
      height: 0,
    })

}

let interval = null

if (banners) {
  window.addEventListener('load', ()=> {
    slider()
    setInterval(slider, 6000)
  })
}

// @todo have to fix Timers Running on Inactive Browser Tabs
// @hints https://stackoverflow.com/questions/48572176/how-to-get-the-remaining-time-out-of-setinterval-function/48572318

document.addEventListener('visibilitychange', function(e) {
  if(document.hidden) {
  }
  else {
  }
});