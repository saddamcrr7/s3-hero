import {
  Swiper,
  Autoplay,
  EffectFade,
} from 'swiper';
Swiper.use([Autoplay, EffectFade])


var swiper = new Swiper(".o-hero__slider", {
  effect: "fade",
  autoplay: true,
  wrapperClass: 'o-hero__slider-container',
  slideClass: 'o-hero__slider-item',
  slideActiveClass: 'is-active',
})
