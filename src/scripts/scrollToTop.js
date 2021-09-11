import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $elm = document.querySelector('.c-scrollToTop')

if($elm) {

  gsap.set($elm, {display: 'none'})


  gsap.to($elm, {
    display: 'block',
    ease: 'none',

    scrollTrigger: {
      trigger: '#main',
      start: `${window.innerHeight} bottom`,
      end: "bottom center",
      scrub: true,
    },
  });


  $elm.addEventListener('click', (e)=> {
    window.scrollTo(0, 0)
  })
}
