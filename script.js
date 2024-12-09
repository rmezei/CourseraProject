function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('visible');
}

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Close the menu if it's open (for mobile view)
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Filter projects based on category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox functionality
function openLightbox(element) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    modal.style.display = 'block';
    modalImg.src = element.src;
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'none';
}

// Close the lightbox when the Esc key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

form.addEventListener('submit', function(event) {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        event.preventDefault();
    }
});

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        return false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        return true;
    }
}

function validateMessage() {
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        return false;
    } else {
        messageError.textContent = '';
        messageError.style.display = 'none';
        return true;
    }
}
