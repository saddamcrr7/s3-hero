import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });

function cover() {
  const $serviceCover = document.querySelector('.o-cover--service')
  const $faqCover = document.querySelector('.o-cover--faq')

  if ($serviceCover) {
    $serviceCover.titles = $serviceCover.querySelectorAll('.o-cover__title')

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: $serviceCover,
        start: "top 100",
        end: "bottom bottom",
      }
    })

    titleTl.from($serviceCover.titles[0], {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: 'back.out'
    }).from($serviceCover.titles[1], {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: 'back.out'
    }).from($serviceCover.titles[2], {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: 'back.out'
    })

  }


  if($faqCover) {
    $faqCover.tringle = $faqCover.querySelector('.o-cover__triangle')
    $faqCover.content = $faqCover.querySelector('.o-cover__content')
    $faqCover.faqs = $faqCover.querySelectorAll('.c-faq')

    gsap.set($faqCover.tringle, {left: getPosition($faqCover.faqs[0]).left + ($faqCover.faqs[0].clientWidth /  2 - ($faqCover.tringle.clientWidth / 2))})

    $faqCover.faqs.forEach(faq => {
      faq.addEventListener('mouseenter', ()=> {
        gsap.to($faqCover.tringle, {
          left: getPosition(faq).left + (faq.clientWidth /  2 - ($faqCover.tringle.clientWidth / 2)),
          ease: 'none'
        })
      })
    })

  }

}

window.addEventListener('load', ()=> cover())
