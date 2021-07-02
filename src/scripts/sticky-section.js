import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

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
      gsap.to(spacer, {
        scrollTrigger: {
          trigger: spacer,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
          pin: true,
          pinSpacing: false
        },
        ease: "none",
      })

    });
  }


  init() {
    this.animation()
  }

}


export default StickySection
