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

    gsap.utils.toArray(".o-service").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
        scrub: false,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
      });

      ScrollTrigger.create({
        trigger: panel,
        scroller: window,
        invalidateOnRefresh: true,
        onEnter: () => {
          goToSection(i)
        }
      });

      ScrollTrigger.create({
        scroller: window,
        invalidateOnRefresh: true,
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
        markers: true
      });
    });


    $services.forEach((section, i) => {
      const $serviceContent = section.querySelector('.o-service__content')
      const $serviceBg = section.querySelector('.o-service__bg')




      gsap.to($serviceContent, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: "top 100px",
          end: "bottom bottom",
          scrub: 1,
        }

      });

    });


  }

}

window.addEventListener('load', () => {
  servicesSctions()
})
