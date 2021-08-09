import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);

function cover() {
  const $covers = document.querySelectorAll('.o-cover')

  if ($covers.length) {
    $covers.forEach(cover => {
      cover.titles = cover.querySelectorAll('.o-cover__title')

      cover.titles.forEach(title => {
        gsap.from(title, {
          scale: 0,
          ease: 'back.out',
          scrollTrigger: {
            trigger: cover,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          }
        })
      })
    })
  }

}

window.addEventListener('load', ()=> cover())
