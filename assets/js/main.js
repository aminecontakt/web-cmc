// Form validation for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            let errors = [];
            
            if (name === '') {
                isValid = false;
                errors.push('Le nom est requis.');
            }
            
            if (email === '') {
                isValid = false;
                errors.push('L\'email est requis.');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errors.push('Veuillez entrer un email valide.');
            }
            
            if (subject === '') {
                isValid = false;
                errors.push('Le sujet est requis.');
            }
            
            if (message === '') {
                isValid = false;
                errors.push('Le message est requis.');
            }
            
            // Display errors or success
            const existingErrorDiv = document.querySelector('.error-messages');
            if (existingErrorDiv) {
                existingErrorDiv.remove();
            }
            
            if (!isValid) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-messages';
                errorDiv.style.color = 'red';
                errorDiv.style.marginTop = '20px';
                errorDiv.innerHTML = '<h3>Erreurs de validation :</h3><ul>' + errors.map(error => '<li>' + error + '</li>').join('') + '</ul>';
                contactForm.appendChild(errorDiv);
            } else {
                // Simulate form submission (in a real app, this would send to server)
                const successDiv = document.createElement('div');
                successDiv.className = 'success-message';
                successDiv.style.color = 'green';
                successDiv.style.marginTop = '20px';
                successDiv.innerHTML = '<h3>Message envoyé avec succès !</h3><p>Nous vous contacterons bientôt.</p>';
                contactForm.appendChild(successDiv);
                
                // Reset form
                contactForm.reset();
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply to all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
