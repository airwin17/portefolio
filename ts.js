"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = require("swiper");
var swiper = new swiper_1.default('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: {
        invert: false
    }
});
