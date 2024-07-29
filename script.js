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

