let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onClick = () =>{
    searchForm.classList.toggle('active');
} 


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onClick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onClick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onClick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
}


var swiper = new Swiper(".popular-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      "@0": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    
    },
  });



  
var swiper = new Swiper(".review-slider", {
  loop:true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },

  breakpoints: {
    "@0": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "1024": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  
  },
});