/**
   Larissa Terranova Portfolio Web Application Logic
   Features: Mobile Navigation Toggle, Scroll State Header, Scroll-Active Navigation, 
             Scroll-Reveal Animations (Intersection Observer), and Simulated Contact Form Handling.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelectorAll('.nav-item');
    const contactForm = document.getElementById('contact-form');
    const formSubmit = document.getElementById('form-submit');
    const formSuccessMsg = document.getElementById('form-success-msg');

    // --- Mobile Menu Toggle ---
    if (menuToggle && navMenu && hamburger) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('open');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu on clicking any navigation link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Header Scroll State class ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    
    const highlightNav = () => {
        let scrollPosition = window.scrollY + 150; // offset for nav height

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // run once on load

    // --- Scroll-Reveal Animations (Intersection Observer) ---
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% visible
        rootMargin: '0px 0px -40px 0px' // offset trigger slightly
    });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Contact Form Submission Handling ---
    if (contactForm && formSubmit && formSuccessMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameVal = document.getElementById('form-name').value;
            const submitText = formSubmit.querySelector('.btn-text');
            const submitSpinner = formSubmit.querySelector('.btn-spinner');

            // Set Loading UI
            formSubmit.disabled = true;
            submitText.textContent = "Sending...";
            submitSpinner.style.display = "inline-block";
            formSuccessMsg.style.display = "none";

            // Simulate form submission delay
            setTimeout(() => {
                // Restore Button State
                formSubmit.disabled = false;
                submitText.textContent = "Send Message";
                submitSpinner.style.display = "none";

                // Display Success Message
                formSuccessMsg.innerHTML = `<strong>Thank you, ${nameVal}!</strong> Your message has been sent successfully. I will get back to you within 2 business days.`;
                formSuccessMsg.style.display = "block";

                // Clear input fields
                contactForm.reset();
            }, 1500);
        });
    }

});
