import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin
} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let container = document.querySelector("#main");

let height;
function setHeight() {
  height = container.clientHeight;
  document.body.style.height = (height - window.innerHeight) + "px";
}
ScrollTrigger.addEventListener("refreshInit", setHeight);

// smooth scrolling container
gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});
