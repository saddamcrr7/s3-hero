const $preloader = document.querySelector('.js-preloader')

window.addEventListener('DOMContentLoaded',()=> {
  $preloader.style.opacity = '0'

  $preloader.addEventListener('transitionend', ()=> {
    $preloader.style.display = 'none'
  })

})
