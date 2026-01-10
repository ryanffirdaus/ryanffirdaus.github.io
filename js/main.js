/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */

import TypingAnimation from './typing.js';
import Navigation from './navigation.js';
import ScrollReveal from './scroll-reveal.js';
import InteractiveEffects from './effects.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    TypingAnimation.init('typing-text');
    Navigation.init();
    ScrollReveal.init();
    InteractiveEffects.init();

    // Mark body as loaded for any loading animations
    document.body.classList.add('loaded');
});

// Console Easter Egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%cInterested in working together? Reach out at ryanfaatih.firdaus@gmail.com', 'font-size: 14px; color: #a0a0b0;');
