const aboutSection = document.querySelector('.about');
const aboutData = document.querySelector('.about__data');

const animateAbout = () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        gsap.to(aboutData, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.out"
        });
        window.removeEventListener('scroll', animateAbout); 
    }
};

window.addEventListener('scroll', animateAbout);
