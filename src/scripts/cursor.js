const $cursor = document.querySelector('.c-cursor')

document.addEventListener('mousemove', (e) => {
  $cursor.setAttribute('style',
    `top: ${e.pageY-10}px; left: ${e.pageX-10}px`)
})

beSmall(['a', 'button'])
beBig(['.o-header__toggler', '.c-brand',])


function beSmall(domArr) {
  domArr.forEach(element => {
    const $elms = document.querySelectorAll(element)
    console.log( $elms);
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
