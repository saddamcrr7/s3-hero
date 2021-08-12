import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  timeline()
})

function timeline() {
  const $timeLine = document.querySelector('.o-timeline')

  if ($timeLine) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".o-timeline",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    tl.to('.o-timeline__progress-bar', {
      ease: 'none',
      height: '100%'
    })


    gsap.utils.toArray(".o-timeline__line-inner").forEach((line, i) => {
      line.year = line.querySelector('.o-timeline__year')
      line.content = line.querySelector('.o-timeline__content')

      gsap.to(line.year, {
        y: line.clientHeight - 50,
        ease: 'none',

        scrollTrigger: {
          trigger: line,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => {
            line.year.classList.add('is-active')
            line.content.classList.add('is-active')
          },
          onLeaveBack: () => {
            line.year.classList.remove('is-active')
            line.content.classList.remove('is-active')
          },
        },

        onUpdate: ScrollTrigger.update

      });

    });
  }

}
