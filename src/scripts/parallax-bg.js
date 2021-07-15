import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


window.addEventListener('load', ()=> {parallaxBg()})

function parallaxBg() {
  gsap.utils.toArray(".o-bg").forEach((section, i) => {
    section.bg = section.querySelector(".o-bg__image");

    section.bg.style.objectPosition =
    `50% ${-section.clientHeight/ 1.2}px`;

    gsap.to(section.bg, {
      objectPosition: `50% ${section.clientHeight/2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top-=100%",
        scrub: true
      }
    });
  });
}

