import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $hero = document.querySelector('#service-hero')


if ($hero) {
  const $heroTiltle = document.querySelector('#service-hero-title')
  const $heroTiltleBg = $heroTiltle.querySelector('.c-service-hero-title__bg')
  const $heroTitleSpacer = $hero.querySelector('.o-simple-hero__title-spacer')
  const $servicesContainer = document.querySelector('#services-container')
  const $services = document.querySelectorAll('.o-service')

  $heroTiltle.style.top = `${getPosition($heroTitleSpacer).top}px`
  $heroTiltle.style.left = `${getPosition($heroTitleSpacer).left - 20}px`

  $heroTiltleBg.style.top = `-${getPosition($heroTitleSpacer).top}px`
  $heroTiltleBg.style.left = `-${getPosition($heroTitleSpacer).left-16}px`

  gsap.to($heroTiltle, {
    top: 100,
    ease: 'none',

    scrollTrigger: {
      trigger: $servicesContainer,
      start: "top+=50 center",
      end: "500 center",
      scrub: 0.7,
    }

  });

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });

  const firstElem = document.querySelector(".o-service");

  function goToSection(i, anim) {
    gsap.to(window, {
      scrollTo: {
        y: i * innerHeight + firstElem.offsetTop,
        autoKill: false,
        // overwrite: true,
      },
      // duration: 1,
      ease: 'none'
    });

    if (anim) {
      anim.restart();
    }
  }

  $services.forEach((panel, i) => {
    // ScrollTrigger.create({
    //   trigger: panel,
    //   onEnter: () => goToSection(i)
    // });

    // ScrollTrigger.create({
    //   trigger: panel,
    //   start: "bottom bottom",
    //   onEnterBack: () => goToSection(i),
    // });

  });

}
