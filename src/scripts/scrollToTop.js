import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const $elm = document.querySelector('.c-scrollToTop')

if($elm) {

  function scrolltodisplay() {
    gsap.set($elm, {display: 'none'})


    gsap.to($elm, {
      display: 'block',
      bottom: 20,
      right: 20,
      ease: 'none',

      scrollTrigger: {
        trigger: '#main',
        start: `${window.innerHeight} bottom`,
        end: "bottom center",
        scrub: true,
      },
    });
  }

  scrolltodisplay()

  window.addEventListener('resize',()=> {
    scrolltodisplay()
  })


  $elm.addEventListener('click', (e)=> {
    window.scrollTo(0, 1)
    ScrollTrigger.update
  })
}
