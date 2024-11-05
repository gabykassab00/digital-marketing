window.onload = function() {
    gsap.from(".home__data-title", {
        duration: 1,
        y: -50, 
        opacity: 0, 
        ease: "bounce.out"
    });

    gsap.from(".home__data-desc", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".home__btn", {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1,
        ease: "power2.out"
    });
};
