
import './styles/main.scss';

import './scripts/preloader'
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
import './scripts/project-viewer'
import './scripts/service-page'
import './scripts/cover'



import PanelSlider from './scripts/project-cards'
import StickySection from './scripts/sticky-section'

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

window.addEventListener('load', ()=> {

  function displayMd(x) {
    if (x.matches) {
      const stickySection =  new StickySection('.js-sticky-section')
      const b = new PanelSlider('.c-project-card', '.o-customers__row')
    }
  }

  let xMd = window.matchMedia("(min-width: 1024px)")
  displayMd(xMd)
  xMd.addListener(displayMd)

})



