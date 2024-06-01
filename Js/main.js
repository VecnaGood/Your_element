const menu_btn = document.querySelector('.menu_btn');
const header_item = document.querySelector('.header_item');
const menu_btn_item_one = document.querySelector('.menu_btn_item_one');
const menu_btn_item_two = document.querySelector('.menu_btn_item_two');
const menu_btn_item_three = document.querySelector('.menu_btn_item_three');


  menu_btn.addEventListener('click',()=>{
  header_item.classList.toggle('menu__list--open');
  menu_btn_item_one.classList.toggle('menu_btn_active');
  menu_btn_item_two.classList.toggle('menu_btn_active');
  menu_btn_item_three.classList.toggle('menu_btn_active');
});




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  freeMode: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    380: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



var swiper = new Swiper(".mySwiper_Sales", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  freeMode: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    380: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

