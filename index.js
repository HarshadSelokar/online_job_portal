// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
});

// Form submission (prevent default)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });
});

// Job search functionality (dummy)
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const keywords = document.querySelector('.search-box input:first-child').value;
        const location = document.querySelector('.search-box input:nth-child(2)').value;
        
        if (keywords || location) {
            alert(`Searching for "${keywords}" in "${location || 'all locations'}"`);
        } else {
            alert('Please enter keywords or location to search');
        }
    });
}