import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


window.addEventListener('load', () => {
  parallaxBg()
})

function parallaxBg() {
  gsap.utils.toArray(".o-bg").forEach((section, i) => {
    section.bg = section.querySelector(".o-bg__image");
    section.bgOB = section.querySelector(".o-bg__image--obpyb");

    if (section.bgOB) {
      function myFunction(x, x2) {
        if (x.matches) {
          section.bgOB.style.objectPosition =
            `50% ${-section.clientHeight * 2.2}px`;
        } else {
          section.bgOB.style.objectPosition =
            `50% ${-section.clientHeight * 3}px`;
        }

        if (x2.matches) {
          section.bgOB.style.objectPosition =
            `50% ${-section.clientHeight}px`;
        }
      }

      let x = window.matchMedia("(max-width: 1440px)")
      let x2 = window.matchMedia("(max-width: 786px)")
      myFunction(x, x2)
      x.addListener(myFunction)
      x2.addListener(myFunction)

      gsap.to(section.bgOB, {
        objectPosition: `50% ${section.clientHeight}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top-=100%",
          scrub: true
        },
        onUpdate: ScrollTrigger.update
      });

    } else {
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
        },
        onUpdate: ScrollTrigger.update
      });
    }


  });
}
