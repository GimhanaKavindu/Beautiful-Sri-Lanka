document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            
            formFeedback.style.color = '#16a34a';
            formFeedback.textContent = `Thank you, ${name}! Your message has been simulated as successfully sent.`;
            
            contactForm.reset();
        });
    }
});