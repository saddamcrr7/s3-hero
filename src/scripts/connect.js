
window.addEventListener('load', ()=>{
  const $tooltips =  document.querySelectorAll('.o-connect__contact-tooltip')

  if($tooltips.length) {
    $tooltips.forEach(tooltip => {
      tooltip.style.left = `-${tooltip.offsetWidth / 2}px`
    })
  }
})
