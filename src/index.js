
import './styles/main.scss';

import './scripts/smoth-scroll'
import './scripts/header'
import './scripts/brand'
import './scripts/hero'
import './scripts/cursor'
import './scripts/slogan'
import './scripts/parallax-bg'
import './scripts/value-counter'
import './scripts/project-cards'



import PanelSlider from './scripts/project-cards'
import StickySection from './scripts/sticky-section'

const b = new PanelSlider('.c-project-card', '.o-customers__row')

const stickySection =  new StickySection('.js-sticky-section')
