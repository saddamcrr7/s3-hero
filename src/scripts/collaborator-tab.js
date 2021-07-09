const $tabs = document.querySelectorAll('.c-tab')

$tabs.forEach( $tab => {
  const $btns = $tab.querySelectorAll('.c-tab__btn')
  const $panels = $tab.querySelectorAll('.c-tab__panel')
  const $body = $tab.querySelector('.c-tab__body')

  $btns.forEach(($btn, i) => {
    $btn.addEventListener('click', ()=> {
      $btns.forEach(btn =>  btn.classList.remove('is-active'))
      $panels.forEach(panel =>  panel.classList.remove('is-active'))

       $btn.classList.add('is-active')
       $panels[i].classList.add('is-active')

       const $panelInner = $panels[i].querySelector('.c-tab__panel-inner')

       $body.style.height = `${$panelInner.clientHeight}px`
    })
  })

})
