
window.addEventListener('load', ()=>{
  const $tooltips =  document.querySelectorAll('.o-connect__contact-tooltip')
  const $icons = document.querySelectorAll('.o-connect__contact-icon')

  if($tooltips.length) {
    setTimeout(() => {
      $tooltips.forEach((tooltip, i) => {
        tooltip.style.left = `-${tooltip.clientWidth / 2 - $icons[i].clientWidth / 2}px`
      })
    }, 1000);
  }
})
