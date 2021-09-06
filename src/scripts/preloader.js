const $preloader = document.querySelector('.js-preloader')

window.addEventListener('load',()=> {
  setTimeout(() => {
    $preloader.style.opacity = '0'

    $preloader.addEventListener('transitionend', ()=> {
      $preloader.style.display = 'none'
    })
  }, 1000);
})
