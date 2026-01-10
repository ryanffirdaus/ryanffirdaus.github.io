/**
 * Typing Animation Module
 * Creates a typewriter effect cycling through different roles
 */

const TypingAnimation = {
    element: null,
    roles: [
        'Backend Developer',
        'Go Enthusiast',
        'IoT Explorer',
        'System Automator',
        'Problem Solver'
    ],
    roleIndex: 0,
    charIndex: 0,
    isDeleting: false,
    typingSpeed: 100,

    init(elementId) {
        this.element = document.getElementById(elementId);
        if (this.element) {
            setTimeout(() => this.type(), 1000);
        }
    },

    type() {
        const currentRole = this.roles[this.roleIndex];

        if (this.isDeleting) {
            this.element.textContent = currentRole.substring(0, this.charIndex - 1);
            this.charIndex--;
            this.typingSpeed = 50;
        } else {
            this.element.textContent = currentRole.substring(0, this.charIndex + 1);
            this.charIndex++;
            this.typingSpeed = 100;
        }

        if (!this.isDeleting && this.charIndex === currentRole.length) {
            this.typingSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
            this.typingSpeed = 500;
        }

        setTimeout(() => this.type(), this.typingSpeed);
    }
};

export default TypingAnimation;
