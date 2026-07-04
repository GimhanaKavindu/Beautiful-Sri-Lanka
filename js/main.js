document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle System
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 2. Client-Side Contact Form Submission Event Handler
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents default page refresh reload behaviour

            const name = document.getElementById('name').value;
            
            // Simulating message transmission receipt verification feedback
            formFeedback.style.color = '#16a34a'; // Success Green color
            formFeedback.textContent = `Thank you, ${name}! Your message has been simulated as successfully sent.`;
            
            contactForm.reset(); // Clear text inputs blocks
        });
    }
});