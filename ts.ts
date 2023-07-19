import Swiper from "swiper";
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel:{
      invert: false
    }
  });