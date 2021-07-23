import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $hero = document.querySelector('#service-hero')

function servicesSctions() {
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
        scrub: true,
      }

    });

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause"
    });


    function goToSection(section, i, anim) {


      console.log(i);
      gsap.to(window, {
        scrollTo: {
          y: i * section.clientHeight,
          autoKill: false
        },
        ease: 'none'
      });
      if (anim) {
        anim.restart();
      }
    }


    $services.forEach((section, i) => {
      const $serviceContent = section.querySelector('.o-service__content')

      i += 1


      ScrollTrigger.create({
        trigger: section,
        pinSpacing: false,

        onEnter: () => goToSection(section, i)
      });

      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        pinSpacing: false,

        onEnterBack: () => goToSection(section, i),
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: false,
        pin: true,
        pinSpacing: false,
      });


      gsap.to($serviceContent, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          markers: true
        }

      });

    });


  }

}

window.addEventListener('load', () => {
  servicesSctions()
})
