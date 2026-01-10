/**
 * Interactive Effects Module
 * Handles hover effects, card tilts, and micro-interactions
 */

const InteractiveEffects = {
    init() {
        this.initSkillHover();
        this.initCardTilt();
    },

    initSkillHover() {
        const skillItems = document.querySelectorAll('.skill-item');

        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });

            item.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    },

    initCardTilt() {
        const projectCards = document.querySelectorAll('.project-card:not(.featured)');

        projectCards.forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }
};

export default InteractiveEffects;
