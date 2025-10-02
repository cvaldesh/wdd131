/**
 * siteplan.js
 * * This file is included to complete the required file structure for the
 * project wireframe. For an introductory course, this file would typically
 * contain simple JavaScript logic, such as:
 * * 1. Toggling the mobile navigation menu (sidebar).
 * 2. Basic form validation.
 * 3. Handling interactive elements (like expanding sections).
 * * Since this is a static wireframe, we will only add the mobile menu toggle logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle && sidebar) {
        // Function to toggle the sidebar's visibility
        menuToggle.addEventListener('click', () => {
            // Check if the sidebar is currently displayed as 'none' (mobile state)
            const isHidden = window.getComputedStyle(sidebar).display === 'none';
            
            if (isHidden) {
                // On small screens, we make it block/flex for the menu to appear
                sidebar.style.display = 'flex'; 
            } else if (window.innerWidth < 768) { 
                // Only hide if we are on a small screen
                 sidebar.style.display = 'none';
            }
            
            // NOTE: In a real app, you would use a CSS class (e.g., .sidebar-open)
            // to handle the transition animation for better performance.
        });
    }
});
