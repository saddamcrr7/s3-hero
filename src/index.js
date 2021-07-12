
import './styles/main.scss';

import './scripts/smoth-scroll'
import './scripts/header'
import './scripts/brand'
import './scripts/hero'
import './scripts/cursor'
import './scripts/parallax-bg'
import './scripts/value-counter'
import './scripts/project-cards'
import './scripts/collaborator-tab'
import './scripts/collaborator-modal'
import './scripts/timeline'



import PanelSlider from './scripts/project-cards'
import StickySection from './scripts/sticky-section'

window.addEventListener('load', ()=> {
  const b = new PanelSlider('.c-project-card', '.o-customers__row')

  function myFunction(x) {
    if (x.matches) {
      const stickySection =  new StickySection('.js-sticky-section')
    }
  }

  let x = window.matchMedia("(min-width: 768px)")
  myFunction(x)
  x.addListener(myFunction)

})



