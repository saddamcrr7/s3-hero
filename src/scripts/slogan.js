import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "../scripts/vendor/gsap-member/src/all";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// ScrollTrigger.create({
//   trigger: '.o-slogan',
//   start: 'top top',
//   endTrigger: 'footer',
//   end: 'bottom+=100vh bottom',
//   pin: true,
//   pinType: "fixed",
//   markers: true,
//   pinReparent: true,
//   pinSpacing: false
// });

