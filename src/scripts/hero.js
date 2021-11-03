import {
  gsap,
  CustomEase,
  ExpoScaleEase
} from "../scripts/vendor/gsap-member/src/all";
import RecurringTimer from './utils/RecurringTimer'


gsap.registerPlugin(CustomEase, ExpoScaleEase);


let index = -1

const sliderItems = document.querySelectorAll('.o-hero__slider-item')
const banners = document.querySelectorAll('.o-banner')

gsap.ticker.lagSmoothing(0);

function slider() {
  index++

  if (index == sliderItems.length) {
    index = sliderItems.length
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

  let tl = gsap.timeline({
    repeatRefresh: true
  });

  const activeInner = sliderItems[index].querySelector('.o-banner__inner')
  const prevInner = sliderItems[prevIndex].querySelector('.o-banner__inner')
  const activeInnerImage = sliderItems[index].querySelector('.o-banner__video-wrap-inner')
  const prevInnerImage = sliderItems[prevIndex].querySelector(
    '.o-banner__video-wrap-inner')
  const activeInnerContent = sliderItems[index].querySelector(
    '.o-banner__content')
  const prevInnerContent = sliderItems[prevIndex].querySelector(
    '.o-banner__content')

  let power = window.innerWidth * 3.7

  if(window.innerWidth < 768) {
    power = window.innerWidth * 5
  }

  const videoElm = banners[index].querySelector('.o-banner__video')

  videoElm.play()

  tl.to(banners[index], {
      duration: 2,
      width:  power,
      height:  power,
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
      scale: 1.7,
      ease: "expoScale(1.1, 1.2)",
    })
    .to(activeInner, {
      delay: -.1,
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
      scale: .7,
    })
    .to(banners[prevIndex], {
      delay: 2,
      duration: 0,
      width: 0,
      height: 0,
    })


    if (index == sliderItems.length - 1) {
      setTimeout(() => {
        tl.pause()
      }, 3000)
    }


}




if (banners.length) {
  window.addEventListener('load', () => {

    slider()

    let interval = new RecurringTimer(() => {
      slider()
    }, 6000)


    let interval1 = new RecurringTimer(() => {
      if (index == sliderItems.length - 1) {
        interval.pause()
        interval1.pause()
      }
    }, 0)

  })
}
