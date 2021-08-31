import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener('load', () => {
  parallaxBg()
})

function parallaxBg() {
  gsap.utils.toArray(".o-bg").forEach((bg, i) => {
    bg.image = bg.querySelector('.o-bg__image-wrap')

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
