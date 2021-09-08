import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  const $elm = document.querySelector('.js-sticky-for-visionaries')
  const $visionaries = document.querySelector('.o-visionaries')

  if($elm && $visionaries) {

    gsap.set($elm, {
      y: 0
    })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: $visionaries,
        scrub: 0,
        start: "top bottom",
        end: `${innerHeight} bottom`,
      },
    });

    tl.to($elm, {
      y: innerHeight,
      ease: 'none'
    });
  }


})
