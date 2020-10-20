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
/******/ })()
;