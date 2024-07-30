document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons in the nav section
    const buttons = document.querySelectorAll('.links .link');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target section from the button's data attribute
            const targetId = button.getAttribute('data-target');

            // Hide all sections
            document.querySelectorAll('.dashboard .inner-glass').forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show the home section by default
    document.getElementById('home').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    // Create the custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Update cursor position on click
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'scale(0.9)';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function goToSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        const offset = -index * 100; // Move to the appropriate slide
        carousel.style.transform = `translateX(${offset}%)`;

        currentIndex = index;
    }

    // Arrow key navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
        }
    });

    // Manual control with arrow buttons
    document.querySelector('.arrow-left').addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
});


