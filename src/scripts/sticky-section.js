import {
  gsap,
  ScrollTrigger
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);

class StickySection {
  constructor(elms, options) {

    this.$elms = document.querySelectorAll(elms)
    this.$storeElms = this.$elms


    if (this.$elms) {
      this.init()
    }

  }

  animation() {
    this.$elms.forEach((spacer, i) => {
      const st = ScrollTrigger.create({
        trigger: spacer,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
      });

      window.addEventListener('resize',()=> {
        if(innerWidth > 1024) {
          st.enable()
        }else {
          st.disable()
        }
      })
    });
  }


  init() {
    this.animation()
  }

}


export default StickySection
