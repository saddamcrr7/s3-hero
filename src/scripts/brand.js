const split1 = document.querySelector('.c-brand__split--1 .c-brand__image')
const split2 = document.querySelector('.c-brand__split--2 .c-brand__image')

window.addEventListener('scroll', (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;

    if(st < 200) {
      split1.style.transform = `translateX(${st}px)  translateY(${st}px)`
      split2.style.transform = `translateX(-${st}px) translateY(-${st}px)`
    }
})
