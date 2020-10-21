/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

const mobToggle = document.querySelectorAll('.mobile-toggle');
mobToggle.forEach(function(mobToggleItem) {
    mobToggleItem.onclick = function () { 
        document.querySelector('.mobile-menu').classList.toggle('mobile-menu__open');
    };
});
document.querySelectorAll('.search-btn').forEach(function(mobToggleItem) {
    mobToggleItem.onclick = function () { 
        document.querySelector('.header__search').classList.toggle('header__search__open');
    };
});
var prodGallery = new Swiper('.product-gallery', {
    loop: true,
    navigation: {
        nextEl: '.gallery_next',
        prevEl: '.gallery_prev',
    },    
})
var prodGallerythumbs = new Swiper('.product-gallery-thumbs', {
    slidesPerView: 3,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.thumbs_next',
      prevEl: '.thumbs_prev',
    },
  })
  prodGallery.on("transitionEnd", function(e) {
    document.querySelectorAll('.js-gallery-trigger').forEach((el) => {
      el.classList.remove("is-active");
    });
    document.getElementsByClassName('js-gallery-trigger')[prodGallery.activeIndex].classList.add("is-active");
    if (prodGallerythumbs && prodGallerythumbs.swiper) prodGallerythumbs.swiper.slideTo(prodGallery.activeIndex);
  });
  prodGallery.params.control = prodGallerythumbs;
  prodGallerythumbs.params.control = prodGallery;

var buttonItems = document.querySelectorAll('.js-gallery-trigger'), index, button;
for (index = 0; index < buttonItems.length; index++) {
    button = buttonItems[index];
    button.addEventListener('click', function (event) {
      var index = Array.prototype.indexOf.call(document.querySelectorAll('.js-gallery-trigger'), event.target);
      if (prodGallery && prodGallery.swiper) {
        prodGallery.swiper.slideTo(index);
      }
    });
}


    var plus = document.getElementsByClassName('quantity_plus')[0];
    var minus = document.getElementsByClassName('quantity_minus')[0];
    var field = document.getElementsByClassName('quantity-input__element')[0];
    
    plus.addEventListener('click', function(){ 
      field.value = Calc(1); 
    });
    minus.addEventListener('click', function(){
      field.value = Calc(-1);  
    });
    
    function Calc(num) {
      let result = parseInt(field.value) + num; 
      return (result < 1) ? 1 : result;
    }
/******/ })()
;