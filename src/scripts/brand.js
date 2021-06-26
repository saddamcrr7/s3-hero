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
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

tl.to(split1, {translateX: 200, translateY: 200, duration: 50})
tl.to(split2, {translateX: -200, translateY: -200, duration: 50, delay: -50})
