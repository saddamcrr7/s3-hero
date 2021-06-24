const header = document.querySelector('.o-header')
const toggler = document.querySelector('.o-header__toggler')
const menu = document.querySelector('.c-menu')
const body = document.querySelector('body')

window.addEventListener('load',()=> header.classList.add('is-load'))

if(toggler) {
  toggler.addEventListener('click', ()=> {
    if(!toggler.classList.contains('is-active')) {
      toggler.classList.add('is-active')
      menu.classList.add('is-active')
      header.classList.add('is-active')
      body.classList.add('is-nav-open')
    }else {
      toggler.classList.remove('is-active')
      menu.classList.remove('is-active')
      header.classList.remove('is-active')
      body.classList.remove('is-nav-open')
    }
  })
}
