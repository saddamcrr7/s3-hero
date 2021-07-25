import {
  gsap,
  ScrollTrigger
} from "../scripts/vendor/gsap-member/src/all";

gsap.registerPlugin(ScrollTrigger);

class StickySection {
  constructor(elms, options) {
    this.options = {}
    this.defaults = {
      viewport: '#viewport',
      main: '#main'
    }

    for (let prop in this.defaults) {
      this.options[prop] = this.defaults[prop]
    }

    for (let prop in options) {
      this.options[prop] = options[prop]
    }

    this.$viewport = document.querySelector(this.options.viewport)
    this.$main = document.querySelector(this.options.main)
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
    });
  }


  init() {
    this.animation()
  }

}


export default StickySection
