import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });

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


  function heroTitlePostion() {
    $heroTiltle.style.top = `${getPosition($heroTitleSpacer).top}px`
    $heroTiltle.style.left = `${getPosition($heroTitleSpacer).left - 20}px`
  }
  heroTitlePostion()
  window.addEventListener('resize',()=> {
    heroTitlePostion()
  })


  if (window.innerWidth > 1279) {

    gsap.to('#main', {
      zIndex: 2,

      scrollTrigger: {
        trigger: $servicesContainer,
        start: `top bottom`,
        end: "10px center",
        scrub: true,
      },
    });

    gsap.to($heroTiltle, {
      mixBlendMode: 'difference',
      zIndex: 2,
      ease: 'none',

      scrollTrigger: {
        trigger: $servicesContainer,
        start: `top bottom-=200px`,
        end: "10px center",
        scrub: true,
      },
    });

  }else {
    gsap.to('#main', {
      zIndex: 3,

      scrollTrigger: {
        trigger: $servicesContainer,
        start: `top bottom`,
        end: "10px center",
        scrub: true,
      },
    });
  }


  function goToSection(i, anim) {

    gsap.set("body", {overflow: "hidden"});

    gsap.to(window, {
      scrollTo: {
        y: (i + 1) * $services[i].clientHeight,
        autoKill: false
      },
      duration: 0.5,
      overwrite: true,
      onUpdate: ScrollTrigger.update,
      onScrubComplete: () => {
          gsap.set("body", {overflow: "auto", delay: 1.3})
      }
    });

    if (anim) {
      anim.restart();
    }
  }



  gsap.utils.toArray(".o-service").forEach((service, i) => {

    if (!service.classList.contains('is-no-pin')) {

      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: service,
          start: "top top",
          end: `+=${$servicesContainer.clientHeight}`,
          pin: true,
          pinSpacing: false,
        }
      })

      window.addEventListener('resize', ()=> {
        tl.scrollTrigger.refresh();
      })
    }

    if(window.innerWidth > 1279) {
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
        autoAlpha: 0,
        scaleX: 0.97,
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
        autoAlpha: 1,
          ease: 'slow( 0.1 0.1, 0.7 0.7, false)'
        })
        .to($serviceContent, {
          scaleX: 1,
        })


      gsap.to($serviceContent, {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: service,
          start: "center center",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        },
      })


      if (service.classList.contains('o-service--primary')) {
        ScrollTrigger.create({
          trigger: service,
          start: "top center+=200",
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
    }

    gsap.to($serviceBgs[i], {
      y: 0,
      scrollTrigger: {
        trigger: service,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })



  });

}

window.addEventListener('load', () => {
  if ($hero) {
    window.addEventListener('resize',()=> {
      if(window.innerWidth > 1279) {
        window.location.reload(true);
      }
    })

    servicesSctions()
  }
})
