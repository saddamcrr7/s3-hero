import detectMobile from './utils/detectMobile';



window.addEventListener('load', () => {
  init()

  window.addEventListener('resize', () => {
    init()
  })
})

const $cursor = document.querySelector('.c-cursor')
const $viewport = document.querySelector('#viewport')


function init() {
  if(detectMobile()) {
    $cursor.style.display = 'none'
  }else {

    $viewport.addEventListener('mousemove', (e) => {
      $cursor.setAttribute('style',
      `transform: translate(${e.clientX-7}px, ${e.clientY-7}px); display: block;`)
    })

    beSmall(['.js-link', 'button', '.c-collaborator', '.o-connect__contact'])
    beBig(['.o-header__toggler', '.o-header__brand',
      '.c-collaborator-modal__close', '.c-scrollToTop'
    ])
  }
}


function beSmall(domArr) {
  domArr.forEach(element => {
    const $elms = document.querySelectorAll(element)
    if ($elms) {
      $elms.forEach($elm => {
        $elm.addEventListener('mouseenter', () => {
          $cursor.classList.add('c-cursor--small')
        })
        $elm.addEventListener('mouseleave', () => {
          $cursor.classList.remove('c-cursor--small')
        })
      })
    }

  })
}

function beBig(domArr) {
  domArr.forEach(element => {
    const $elms = document.querySelectorAll(element)

    if ($elms) {
      $elms.forEach($elm => {
        $elm.addEventListener('mouseenter', () => {
          $cursor.classList.add('c-cursor--big')
        })
        $elm.addEventListener('mouseleave', () => {
          $cursor.classList.remove('c-cursor--big')
        })
      })
    }

  })
}
