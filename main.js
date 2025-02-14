const swiper = new Swiper('.swiper', {
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

const swiperReview = new Swiper('.swiper-review', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination--review',
    clickable: true
  }
})