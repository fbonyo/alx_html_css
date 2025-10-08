// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements using their IDs
    // 'menu-icon' is the hamburger button
    const menuIcon = document.getElementById('menu-icon');
    // 'nav-links' is the <ul> containing the navigation items
    const navLinks = document.getElementById('nav-links');

    // Check if both elements exist before adding listeners to avoid errors
    if (menuIcon && navLinks) {
        
        // Function to toggle the menu class (open/close state)
        const toggleMenu = () => {
            // Toggles the 'menu-open' class on the navigation list. 
            // The CSS handles the visibility and animation when this class is present.
            navLinks.classList.toggle('menu-open');
        };

        // 1. Add event listener to the hamburger button icon
        menuIcon.addEventListener('click', toggleMenu);

        // 2. Add event listeners to all navigation links to close the menu 
        // after the user clicks a link (improves mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close if the menu is actually open
                if (navLinks.classList.contains('menu-open')) {
                    toggleMenu(); // Closes the menu
                }
            });
        });
    }
});
