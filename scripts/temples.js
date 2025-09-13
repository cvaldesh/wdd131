// JavaScript for dynamic footer dates and hamburger menu functionality

// Dynamic year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified date in footer
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu functionality (placeholder)
document.addEventListener('DOMContentLoaded', () => {
    // This section is for the hamburger menu.
    // Since the instructions request a "responsive hamburger effect", you will need to
    // add a hamburger button to your HTML and use JavaScript to toggle a CSS class
    // on the navigation menu to show/hide it. This placeholder code is to fulfill the
    // "provide code as needed" part of your request.
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('div');
    hamburger.textContent = '☰';
    hamburger.classList.add('hamburger');
    nav.insertAdjacentElement('beforebegin', hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});