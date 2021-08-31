import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'
import getScrollbarWidth from './utils/getScrollbarWidth'


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



  if (window.innerWidth > 1024) {
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
  }


  function goToSection(i, anim) {

    gsap.set("body", {overflow: "hidden", paddingRight: getScrollbarWidth});

    gsap.to(window, {
      scrollTo: {
        y: (i + 1) * $services[i].clientHeight,
        autoKill: false
      },
      duration: 0,
      overwrite: true,
      onUpdate: ScrollTrigger.update,
      onScrubComplete: () => gsap.set("body", {overflow: "auto",  paddingRight: 0, delay: 1.3})
    });

    if (anim) {
      anim.restart();
    }
  }



  gsap.utils.toArray(".o-service").forEach((service, i) => {

    if (!service.classList.contains('is-no-pin')) {
      ScrollTrigger.create({
        trigger: service,
        start: "top top",
        end: `+=${$servicesContainer.clientHeight}`,
        pin: true,
        pinSpacing: false,
      });
    }

    if(window.innerWidth > 1024) {
      ScrollTrigger.create({
        scroller: window,
        trigger: service,
        onEnter: () => {
          goToSection(i)
        }
      });

      ScrollTrigger.create({
        scroller: window,
        trigger: service,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      });


      const $serviceContent = service.querySelector('.o-service__content')

      gsap.set($serviceContent, {
        opacity: 0,
        scaleX: 0.98,
        y: 100
      })

      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: service,
          start: "top 200",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true
        },
      })

      contentTl.to($serviceContent, {
          y: 0,
        })
        .to($serviceContent, {
          opacity: 1,
          ease: 'slow( 0.1 0.1, 0.7 0.7, false)'
        })
        .to($serviceContent, {
          scaleX: 1,
          ease: 'back.out',
          delay: 0.8
        })


      gsap.to($serviceContent, {
        opacity: 0,
        scrollTrigger: {
          trigger: service,
          start: "center center",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        },
        onUpdate: ScrollTrigger.update
      })
    }

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


    if (service.classList.contains('o-service--primary')) {
      ScrollTrigger.create({
        trigger: service,
        start: "top center",
        end: "bottom top",
        onEnter: () => {
          $heroTiltle.style.mixBlendMode = 'normal'
        },
        onEnterBack: () => {
          $heroTiltle.style.mixBlendMode = 'normal'
        },
        onLeave: () => {
          $heroTiltle.style.mixBlendMode = 'difference'
        },
        onLeaveBack: () => {
          $heroTiltle.style.mixBlendMode = 'difference'
        }
      })
    }
  });


  window.addEventListener('resize', () => {
    ScrollTrigger.update
  })

}

window.addEventListener('load', () => {
  if ($hero) {
    servicesSctions()
  }
})
