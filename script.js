const togglerContainer = document.querySelector('.toggler-container');
const togglerMenu = document.querySelector('.toggler-menu');

const header = document.querySelector('header');

// toggler menu toggle functionality
togglerContainer.addEventListener('click', () => {
    togglerMenu.style.display = togglerMenu.style.display === 'block' ? 'none' : 'block';
    header.style.height = togglerMenu.style.display === 'block' ? '340px' : '140px';
    header.style.transition = 'height 0.3s ease';
});