import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.utils.toArray(".o-bg").forEach((section, i) => {
  section.bg = section.querySelector(".o-bg__image");

    section.bg.style.objectPosition = `50% ${-section.clientHeight}px`;

    gsap.to(section.bg, {
      objectPosition: `50% ${section.clientHeight/2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
});


