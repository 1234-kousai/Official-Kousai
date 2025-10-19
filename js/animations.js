// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Hero Image Slideshow
let currentImageIndex = 0;
const heroImages = document.querySelectorAll('.hero-image');

function showNextImage() {
    if (heroImages.length === 0) return;

    // Remove active class from current image
    heroImages[currentImageIndex].classList.remove('active');

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;

    // Add active class to new image
    heroImages[currentImageIndex].classList.add('active');
}

// Start slideshow with 2 second interval
setInterval(showNextImage, 2000);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroHi = document.querySelector('.hero-hi');
    const socialIcons = document.querySelectorAll('.social-icon');

    if (heroHi) {
        heroHi.dataset.animation = 'fade-in-up';
        setTimeout(() => heroHi.classList.add('fade-in-up'), 300);
    }

    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.hero-title-line');
        titleLines.forEach((line, index) => {
            line.dataset.animation = 'fade-in-up';
            setTimeout(() => line.classList.add('fade-in-up'), 500 + (index * 150));
        });
    }

    if (heroSubtitle) {
        heroSubtitle.dataset.animation = 'fade-in-up';
        setTimeout(() => heroSubtitle.classList.add('fade-in-up'), 700);
    }

    const heroUniversity = document.querySelector('.hero-university');
    if (heroUniversity) {
        heroUniversity.dataset.animation = 'fade-in-up';
        setTimeout(() => heroUniversity.classList.add('fade-in-up'), 850);
    }

    socialIcons.forEach((icon, index) => {
        icon.dataset.animation = 'slide-in-right';
        setTimeout(() => icon.classList.add('slide-in-right'), 900 + (index * 150));
    });

    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.dataset.animation = 'fade-in-up';
        observer.observe(header);
    });

    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.dataset.animation = 'fade-in';
        observer.observe(aboutText);
    }

    // Explore button
    const exploreBtn = document.querySelector('.button-wrapper.explore-btn');
    if (exploreBtn) {
        exploreBtn.dataset.animation = 'scale-in';
        observer.observe(exploreBtn);
    }

    // Service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.dataset.animation = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
        observer.observe(item);
    });

    // Skills heading
    const skillsHeading = document.querySelector('.skills-heading');
    if (skillsHeading) {
        skillsHeading.dataset.animation = 'fade-in-up';
        observer.observe(skillsHeading);
    }

    // Skill items
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.dataset.animation = 'scale-in';
        skill.style.animationDelay = `${index * 0.15}s`;
        observer.observe(skill);
    });

    // Portfolio filter bar
    const filterBar = document.querySelector('.filter-bar');
    if (filterBar) {
        filterBar.dataset.animation = 'fade-in';
        observer.observe(filterBar);
    }

    // Project items
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.dataset.animation = 'fade-in-up';
        project.style.animationDelay = `${index * 0.2}s`;
        observer.observe(project);
    });

    // Portfolio footer text
    const portfolioFooterText = document.querySelector('.portfolio-footer-text');
    if (portfolioFooterText) {
        portfolioFooterText.dataset.animation = 'fade-in';
        observer.observe(portfolioFooterText);
    }

    // Footer elements
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.dataset.animation = 'fade-in-up';
        observer.observe(backToTop);
    }

    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.dataset.animation = 'scale-in';
        observer.observe(footerLogo);
    }

    const footerSocial = document.querySelector('.footer-social');
    if (footerSocial) {
        footerSocial.dataset.animation = 'fade-in';
        observer.observe(footerSocial);
    }

    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        footerCopyright.dataset.animation = 'fade-in-up';
        observer.observe(footerCopyright);
    }

    // Separator images
    const separators = document.querySelectorAll('.separator-image');
    separators.forEach(separator => {
        separator.dataset.animation = 'scale-in';
        observer.observe(separator);
    });

    // Family section elements
    const familyHeader = document.querySelector('.family-header');
    if (familyHeader) {
        familyHeader.dataset.animation = 'fade-in-up';
        observer.observe(familyHeader);
    }

    const familyImageWrapper = document.querySelector('.family-image-wrapper');
    if (familyImageWrapper) {
        familyImageWrapper.dataset.animation = 'slide-in-left';
        observer.observe(familyImageWrapper);
    }

    const familyText = document.querySelector('.family-text');
    if (familyText) {
        familyText.dataset.animation = 'fade-in-up';
        observer.observe(familyText);
    }
});

// Smooth scroll for back to top button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Logo click - scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Hamburger menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            // For now, just smooth scroll to About section
            // Later you can add a mobile menu overlay
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
