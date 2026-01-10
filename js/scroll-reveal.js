/**
 * Scroll Reveal Module
 * Handles scroll-triggered reveal animations
 */

const ScrollReveal = {
    revealElements: [],

    init() {
        this.addRevealClasses();
        this.bindEvents();
        this.reveal(); // Initial check
    },

    addRevealClasses() {
        const selectors = [
            '.about-text',
            '.about-image',
            '.skill-category',
            '.project-card',
            '.contact-content'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.classList.add('reveal');
                el.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    },

    bindEvents() {
        window.addEventListener('scroll', () => this.reveal());
    },

    reveal() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
};

export default ScrollReveal;
