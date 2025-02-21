const swiperOne = new Swiper('.swiperOne', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true 
  }
});

const swiperTwo = new Swiper('.swiperTwo', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
})

const sliderReview = new Swiper('.sliderReview', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 75,
  slidesPerView: 3,
  centeredSlides: true,
  pagination: {
    el: '.paginationTwo',
    clickable: true
  }
});