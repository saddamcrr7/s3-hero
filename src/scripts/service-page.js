import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $hero = document.querySelector('#service-hero')
const $serviceHeroSpacer = document.querySelector('#service-hero-spacer')

if ($hero) {
  $serviceHeroSpacer.style.height = `${$hero.clientHeight}px`
}

function servicesSctions() {
  const $heroTiltle = document.querySelector('#service-hero-title')
  const $heroTitleSpacer = $hero.querySelector('.o-simple-hero__title-spacer')
  const $servicesContainer = document.querySelector('#services-container')
  const $services = document.querySelectorAll('.o-service')
  const $serviceBgs = document.querySelectorAll('.o-service-bg__panel')


  $heroTiltle.style.top = `${getPosition($heroTitleSpacer).top}px`
  $heroTiltle.style.left = `${getPosition($heroTitleSpacer).left - 20}px`

  gsap.to($heroTiltle, {
    mixBlendMode: 'difference',
    ease: 'none',

    scrollTrigger: {
      trigger: $servicesContainer,
      start: `top bottom-=200px`,
      end: "10px center",
      scrub: true,
    },
    onUpdate: ScrollTrigger.update
  });

  gsap.to('#main', {
    zIndex: 2,

    scrollTrigger: {
      trigger: $servicesContainer,
      start: `top bottom`,
      end: "10px center",
      scrub: true,
    },
    onUpdate: ScrollTrigger.update
  });

  gsap.to($heroTiltle, {
    top: 100,
    zIndex: 2,
    ease: 'none',

    scrollTrigger: {
      trigger: $servicesContainer,
      start: "top+=100 center",
      end: "480 center",
      scrub: true,
    },

    onUpdate: ScrollTrigger.update

  });


  function goToSection(i, anim) {
    gsap.to(window, {
      scrollTo: {
        y: (i + 1) * $services[i].clientHeight,
      },
      duration: 0,
      ease: 'none',
      onUpdate: ScrollTrigger.update
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
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    ScrollTrigger.create({
      scroller: window,
      invalidateOnRefresh: true,
      trigger: service,
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
      },

      onUpdate: ScrollTrigger.update
    })

    const $serviceContent = service.querySelector('.o-service__content')

    gsap.to($serviceContent, {
      opacity: 0,
      scrollTrigger: {
        trigger: service,
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      },
      onUpdate: ScrollTrigger.update
    })

    gsap.to($serviceContent, {
      opacity: 1,
      scrollTrigger: {
        trigger: service,
        start: "top top+=20",
        end: "top+=200 top+=200",
        scrub: true,
        invalidateOnRefresh: true
      },
      onUpdate: ScrollTrigger.update
    })

    if (service.classList.contains('o-service--primary')) {
      ScrollTrigger.create({
        trigger: service,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          $heroTiltle.style.mixBlendMode = 'normal'
        },
        onEnterBack: () => {
          $heroTiltle.style.mixBlendMode = 'normal'
        },
        onLeaveBack: () => {
          $heroTiltle.style.mixBlendMode = 'difference'
        }
      })
    }


  });

}

window.addEventListener('load', () => {
  if ($hero) {
    servicesSctions()
  }
})
