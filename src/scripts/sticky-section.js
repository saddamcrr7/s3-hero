import {
  gsap,
  ScrollTrigger
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });

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
      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: spacer,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      })

      window.addEventListener('resize', ()=> {
        tl.scrollTrigger.refresh();
      })
    });
  }


  init() {
    this.animation()
  }

}


export default StickySection
