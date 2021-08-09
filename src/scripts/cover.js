import {
  gsap,
  ScrollTrigger,
} from "../scripts/vendor/gsap-member/src/all";

import getPosition from './utils/getPosition'

gsap.registerPlugin(ScrollTrigger);

function cover() {
  const $serviceCover = document.querySelector('.o-cover--service')
  const $faqCover = document.querySelector('.o-cover--faq')

  if ($serviceCover) {
    $serviceCover.titles = $serviceCover.querySelectorAll('.o-cover__title')

    $serviceCover.titles.forEach(title => {
        gsap.from(title, {
          scale: 0,
          ease: 'back.out',
          scrollTrigger: {
            trigger: $serviceCover,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          }
        })
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
