import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $hero = document.querySelector('#service-hero')

function servicesSctions() {
  const $heroTiltle = document.querySelector('#service-hero-title')
  const $heroTiltleBg = $heroTiltle.querySelector('.c-service-hero-title__bg')
  const $heroTitleSpacer = $hero.querySelector('.o-simple-hero__title-spacer')
  const $servicesContainer = document.querySelector('#services-container')
  const $services = document.querySelectorAll('.o-service')
  const $serviceBgs = document.querySelectorAll('.o-service-bg__panel')

  $heroTiltle.style.top = `${getPosition($heroTitleSpacer).top}px`
  $heroTiltle.style.left = `${getPosition($heroTitleSpacer).left - 20}px`

  $heroTiltleBg.style.top = `-${getPosition($heroTitleSpacer).top}px`
  $heroTiltleBg.style.left = `-${getPosition($heroTitleSpacer).left-16}px`

  gsap.to($heroTiltle, {
    top: 100,
    left: getPosition($heroTitleSpacer).left,
    zIndex: 2,
    ease: 'none',

    scrollTrigger: {
      trigger: $servicesContainer,
      start: "top+=100 center",
      end: "480 center",
      scrub: true,
    }

  });


  function goToSection(i, anim) {
    gsap.to(window, {
      scrollTo: {
        y: (i + 1) * $services[i].clientHeight,
      },
      duration: 0,
      ease: 'none'
    });

    if (anim) {
      anim.restart();
    }
  }

  gsap.utils.toArray(".o-service").forEach((service, i) => {

    ScrollTrigger.create({
      trigger: service,
      start: "top top",
      end: `+=${$servicesContainer.clientHeight}`,
      scrub: false,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    ScrollTrigger.create({
      trigger: service,
      scroller: window,
      invalidateOnRefresh: true,
      onEnter: () => {
        goToSection(i)
      }
    });

    ScrollTrigger.create({
      scroller: window,
      invalidateOnRefresh: true,
      trigger: service,
      start: "bottom bottom",
      onEnterBack: () => goToSection(i),
    });

    gsap.to($serviceBgs[i], {
      y: 0,
      scrollTrigger: {
        trigger: service,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })

    gsap.to(service.querySelector('.o-service__content'), {
      opacity: 1,
      scrollTrigger: {
        trigger: service,
        start: "top top+=20",
        end: "top+=200 top+=200",
        scrub: true,
        markers: true
      }
    })

  });

}

window.addEventListener('load', () => {
  if($hero) {
    servicesSctions()
  }
})
