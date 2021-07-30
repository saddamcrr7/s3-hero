import {
  gsap,
} from "./vendor/gsap-member/src/all";

class PanelSlider {
  constructor(elms, options) {

    this.options = {}
    this.defaults = {
      parentElm: '.o-customers__row',
      cardInner: '.c-project-card__inner'
    }

    for (let prop in this.defaults) {
      this.options[prop] = this.defaults[prop]
    }

    for (let prop in options) {
      this.options[prop] = options[prop]
    }

    this.$prentElm = document.querySelector(this.options.parentElm)

    if (this.$prentElm) {
      this.$elms = this.$prentElm.querySelectorAll(elms)

      if (this.$elms) {
        this.init()
      }
    }
  }

  setWidth() {
    this.$elms.forEach(element => {
      element.style.width =
        `${this.$prentElm.clientWidth /  this.$elms.length}px`
      element.style.flexBasis =
        `${this.$prentElm.clientWidth /  this.$elms.length}px`

      this.$elms.forEach((elm, i) => {
        elm.classList.remove('is-active');
      })
    });
  }

  animation(index) {
    const $inner = this.$elms[index].querySelector(this.options.cardInner)

    this.$elms.forEach((elm, i) => {

      elm.classList.remove('is-active');
      this.$elms[index].classList.add('is-active');

      let tl = gsap.timeline();

      tl.to(elm, {
        duration: 1,
        width: `${(this.$prentElm.clientWidth - $inner.clientWidth) /( this.$elms.length - 1)}px`,
        flexBasis: `${(this.$prentElm.clientWidth - $inner.clientWidth) /( this.$elms.length - 1)}px`
      })

      window.addEventListener('resize',()=> {
        if(innerWidth > 1024) {
          tl.pause()
        }else {
          tl.restart()
        }
      })

    })

    let tl2 = gsap.timeline();

    tl2.to(this.$elms[index], {
      duration: 1,
      width: `${$inner.clientWidth}px`,
      flexBasis: `${$inner.clientWidth}px`
    })

    window.addEventListener('resize',()=> {
      if(innerWidth > 1024) {
        tl2.pause()
      }else {
        tl2.restart()
      }
    })
  }

  resetAnimation(index) {
    this.$elms.forEach((elm, i) => {
      elm.classList.remove('is-active');

      let tl3 = gsap.timeline();

      tl3.to(elm, {
        duration: 1,
        width: `${this.$prentElm.clientWidth / (this.$elms.length)}px`,
        flexBasis: `${this.$prentElm.clientWidth / (this.$elms.length)}px`
      })

      window.addEventListener('resize',()=> {
        if(innerWidth > 1024) {
          tl3.pause()
        }else {
          tl3.restart()
        }
      })
    })
  }

  init() {
    this.setWidth()

    window.addEventListener('resize', () => {
      if (innerWidth > 1024) {
        this.setWidth()
      }
    })

    this.$elms.forEach((elm, i) => {
      elm.addEventListener('mouseenter', () => {
        this.animation(i)
      })
    })

    this.$prentElm.addEventListener('mouseleave', () => {
      this.resetAnimation()
    })

  }
}

export default PanelSlider;
