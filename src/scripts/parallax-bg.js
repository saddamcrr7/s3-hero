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




      function myFunction(x) {
        if (x.matches) {
          section.bgOB.style.objectPosition =
            `50% ${-section.clientHeight * 2.2}px`;
        } else {
          section.bgOB.style.objectPosition =
            `50% ${-section.clientHeight * 3}px`;
        }
      }

      let x = window.matchMedia("(max-width: 1440px)")
      myFunction(x)
      x.addListener(myFunction)


      gsap.to(section.bgOB, {
        objectPosition: `50% ${section.clientHeight}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top-=100%",
          scrub: true
        }
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
        }
      });
    }


  });
}
