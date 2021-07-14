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
      // element.style.width =
      //   `${this.$prentElm.clientWidth /  this.$elms.length}px`
      element.style.flex =
        `0 0 ${this.$prentElm.clientWidth /  this.$elms.length}px`

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

      gsap.to(elm, {
        duration: 1,
        // width: `${(this.$prentElm.clientWidth - $inner.clientWidth) /( this.$elms.length - 1)}px`,
        flex: `0 0 ${(this.$prentElm.clientWidth - $inner.clientWidth) /( this.$elms.length - 1)}px`
      })

    })

    gsap.to(this.$elms[index], {
      duration: 1,
      // width: `${$inner.clientWidth}px`,
      flex: `0 0 ${$inner.clientWidth}px`
    })
  }

  resetAnimation(index) {
    this.$elms.forEach((elm, i) => {
      elm.classList.remove('is-active');

      gsap.to(elm, {
        duration: 1,
        // width: `${this.$prentElm.clientWidth / (this.$elms.length)}px`,
        flex: `0 0 ${this.$prentElm.clientWidth / (this.$elms.length)}px`
      })
    })
  }

  init() {
    this.setWidth()

    window.addEventListener('resize', () => {
      this.setWidth()
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
