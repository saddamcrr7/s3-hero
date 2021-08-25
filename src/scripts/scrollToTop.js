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
      start: `top+=${innerHeight} center`,
      end: "bottom center",
      scrub: true,
    },
  });


  $elm.addEventListener('click', (e)=> {
    gsap.to(window, {
      scrollTo: {
        y: 0,
      },
      duration: 0,
      overwrite: true,
      onUpdate: ScrollTrigger.update,
    })
  })
}
