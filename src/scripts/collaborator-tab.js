
import {
  gsap,
} from "../scripts/vendor/gsap-member/src/all";

window.addEventListener('load',()=> {
  const $tabs = document.querySelectorAll('.c-tab')
  const $images = document.querySelectorAll('.c-collaborator-modal__images')

  $tabs.forEach( ($tab, j)=> {
    const $btns = $tab.querySelectorAll('.c-tab__btn')
    const $panels = $tab.querySelectorAll('.c-tab__panel')
    const $body = $tab.querySelector('.c-tab__body')
    let $imageWrappers

    setTimeout(() => {
      $body.style.height = `${$panels[0].querySelector('.c-tab__panel-inner').clientHeight}px`
    }, 1000);

    if(j < $images.length) {
      $imageWrappers = $images[j].querySelectorAll('.c-collaborator-modal__image-wrapper')

      gsap.set($imageWrappers[1], {
        height: 0,
        zIndex: 0
      })

      setTimeout(() => {
        gsap.set($images[j], {
          height: $imageWrappers[0].querySelector('.c-collaborator-modal__image').offsetHeight
        })
        gsap.set($imageWrappers[0], {
          height: $imageWrappers[0].querySelector('.c-collaborator-modal__image').offsetHeight
        })
      }, 1000);
    }

    $btns.forEach(($btn, i) => {
      $btn.addEventListener('click', ()=> {
        $btns.forEach(btn =>  btn.classList.remove('is-active'))
        $panels.forEach(panel =>  panel.classList.remove('is-active'))

         $btn.classList.add('is-active')
         $panels[i].classList.add('is-active')

         const $panelInner = $panels[i].querySelector('.c-tab__panel-inner')

         $body.style.height = `${$panelInner.clientHeight}px`

         if(j < $images.length) {
           let preI = i - 1
           if (preI == -1) {
             preI = $btns.length - 1
           }

          const indexImageHeight = $imageWrappers[i].querySelector('.c-collaborator-modal__image').offsetHeight

          gsap.to($images[j], {
            height: indexImageHeight
          })

          gsap.set($imageWrappers[preI], {
            zIndex: 0
          })

          gsap.set($imageWrappers[i], {
            zIndex: 1
          })

          gsap.to($imageWrappers[i], {
            height: indexImageHeight,

            onComplete: ()=> {
              gsap.set($imageWrappers[preI], {
                height: 0,
              })
            }
          })
         }
      })
    })

  })

})
