const $cursor = document.querySelector('.c-cursor')
const $viewport = document.querySelector('#viewport')

$viewport.addEventListener('mousemove', (e) => {
  $cursor.setAttribute('style',
    `top: ${e.clientY-7}px; left: ${e.clientX-7}px`)
})

beSmall(['.js-link', 'button'])
beBig(['.o-header__toggler', '.o-header__brand',])


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

  });
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

  });
}
