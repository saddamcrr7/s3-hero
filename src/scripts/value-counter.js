import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";


gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  const $counts = document.querySelectorAll('.js-count')

  $counts.forEach($count => {
    let zero = {
        val: 0
      },
      num = $count.dataset.value,
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      val: num,
      duration: 2,
      scrollTrigger: $count,
      onUpdate: function () {
        $count.innerHTML = zero.val.toFixed(decimals)
      }
    });
  })
})
