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
  slidesPerView: 3, // Показывать 3 слайда одновременно
    spaceBetween: 20, // Отступ между слайдами (по желанию)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
})

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".info").forEach((el, index) => {
  gsap.to(el, {
    y: index % 2 === 0 ? -50 : 50, // Чередуем направления
    opacity: 1,
    scrollTrigger: {
      trigger: ".parallax-section",
      start: "top 80%", 
      scrub: 2,
    }
  });
});