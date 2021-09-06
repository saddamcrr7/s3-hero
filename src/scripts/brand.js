import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  brand()
})

function brand() {
  const split1 = document.querySelector('.c-brand__split--1 .c-brand__image')
  const split2 = document.querySelector('.c-brand__split--2 .c-brand__image')

  gsap.to(split1, {
    x: 100,
    y: 100,
    ease: 'none',

    scrollTrigger: {
      trigger: "#main",
      start: "2px top",
      end: `${1000} top`,
      scrub: 0,
      scroller: window,
    }
  })

  gsap.to(split2, {
    x: -250,
    y: -100,
    ease: 'none',

    scrollTrigger: {
      trigger: "#main",
      start: "2px top",
      end: `1000 top`,
      scrub: 0,
      scroller: window,
    }
  })

  gsap.to('.c-brand', {
    display: 'none',
    ease: 'none',

    scrollTrigger: {
      trigger: "#main",
      start: "1000 center",
      end: `1000 center`,
      scrub: 0,
      scroller: window,
    }
  })

}

