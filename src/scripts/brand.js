import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


gsap.registerPlugin(ScrollTrigger);

const split1 = document.querySelector('.c-brand__split--1 .c-brand__image')
const split2 = document.querySelector('.c-brand__split--2 .c-brand__image')

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "2px top",
    end: `3000px bottom`,
    scrub: true,
  }
});

tl.to(split1, {translateX: 100, translateY: 100, duration: 1})
tl.to(split2, {translateX: -100, translateY: -100, duration: 1, delay: -1})
