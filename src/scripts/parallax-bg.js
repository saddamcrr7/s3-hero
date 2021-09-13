import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener('load', () => {
  if(window.innerWidth > 769) {
    parallaxBg()
  }
})

function parallaxBg() {
  gsap.utils.toArray(".o-bg").forEach((bg, i) => {
    bg.image = bg.querySelector('.o-bg__image-wrap')

    gsap.set(bg, {
      zIndex: 0
    })

    gsap.set(bg.image, {
      zIndex: 0
    })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: bg,
        scrub: true,
        pin: false,
      },
      onUpdate: ScrollTrigger.update
    });

    tl.from(bg.image, {
      yPercent: -20,
      ease: "none",
    }).to(bg.image, {
      yPercent: 20,
      ease: "none",
    });

  });
}
