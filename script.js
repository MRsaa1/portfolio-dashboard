// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    
    // Theme switcher click handler
    themeSwitcher.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Save theme preference
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
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
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Active navigation link on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
    
    // Download CV Button
    const downloadCVBtn = document.getElementById('downloadCVBtn');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Try to download CV from resume section or create print version
            const resumeSection = document.getElementById('resume');
            if (resumeSection) {
                // Create a new window with printable resume
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Oleksii Slieptsov - Resume</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
                            h1, h2, h3 { color: #333; }
                            .resume-section { margin-bottom: 30px; }
                            .resume-item { margin-bottom: 20px; }
                            @media print { body { padding: 20px; } }
                        </style>
                    </head>
                    <body>
                        ${resumeSection.innerHTML}
                    </body>
                    </html>
                `);
                printWindow.document.close();
                printWindow.print();
            } else {
                // Fallback: scroll to resume section
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Send email to o.slieptsov@saa-alliance.com
            // Using mailto: for GitHub Pages (static site)
            const recipientEmail = 'o.slieptsov@saa-alliance.com';
            const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Message');
            const emailBody = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Subject: ${formData.subject}\n\n` +
                `Message:\n${formData.message}`
            );
            
            const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showFormMessage('Thank you! Your email client will open. Please send the message to complete the submission.', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
    
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Enhanced scroll animations for timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Accordion functionality for Published Articles
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Initialize all accordions as closed
    accordionHeaders.forEach(header => {
        const content = header.nextElementSibling;
        if (content && header.getAttribute('aria-expanded') === 'false') {
            content.style.maxHeight = '0';
            content.style.padding = '0 25px';
            content.style.opacity = '0';
        }
    });
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;
            
            if (!content) return;
            
            // Close all other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    const otherContent = otherHeader.nextElementSibling;
                    otherHeader.setAttribute('aria-expanded', 'false');
                    if (otherContent) {
                        otherContent.style.maxHeight = '0';
                        otherContent.style.padding = '0 25px';
                        otherContent.style.opacity = '0';
                    }
                }
            });
            
            // Toggle current accordion
            this.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                // Open
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '0 25px 25px 25px';
                content.style.opacity = '1';
            } else {
                // Close
                content.style.maxHeight = '0';
                content.style.padding = '0 25px';
                content.style.opacity = '0';
            }
        });
    });
});

