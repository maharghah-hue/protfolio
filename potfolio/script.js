// 1. Handle Contact Form Submission
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the browser from refreshing the page
        
        alert('Thank you for reaching out! Your message has been sent.');
        
        form.reset(); // Clears the input fields after submission
    });
}

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
})