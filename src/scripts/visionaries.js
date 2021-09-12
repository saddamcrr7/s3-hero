import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);

const vs = document.querySelector('.o-visionaries')

function vsFn() {
    vs.text = vs.querySelector('.o-visionaries__title')
    vs.Bg = vs.querySelector('.o-visionaries__bg')
    vs.image = vs.querySelector('.o-visionaries__bg-image-wrap')

    gsap.set(vs.image, {
      y: -vs.text.clientHeight
    })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: vs,
        scrub: true,
        start: "top bottom",
        end: `top+=${vs.clientHeight * 2} top`,
      },
      onUpdate: ScrollTrigger.update
    });

    tl.to(vs.image, {
      y: vs.text.clientHeight / 1.4,
    });
}

window.addEventListener('load',()=> {
  if(vs) {
    vsFn()

    window.addEventListener('resize',()=> {
      vsFn()
    })
  }
})
