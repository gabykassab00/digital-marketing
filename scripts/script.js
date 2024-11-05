document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".myswiper", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      mousewheel: true,
      keyboard: true,
    });
  });