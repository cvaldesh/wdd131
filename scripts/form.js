// --- Product Data Array (Step 4.1) ---
// Note: In a real application, this would typically come from an external source.
const products = [
    { id: 'fc-1888', name: 'Flux Capacitor' },
    { id: 'a-2038', name: 'Anti-Gravity Generator' },
    { id: 'ed-1599', name: 'Empathy Detector' },
    { id: 'ts-2000', name: 'Time Scanner' },
    { id: 'lp-3021', name: 'Logic Processor' }
    // Add more products as needed
];

// --- Common Footer Functionality ---
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    // Check if the elements exist before updating (for both form.html and review.html)
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    const modifiedSpan = document.getElementById('lastModified');
    if (modifiedSpan) {
        modifiedSpan.textContent = lastModified;
    }
}

// --- Product Name Population Function (Step 4.1) ---
function populateProductSelect() {
    const selectElement = document.getElementById('productName');
    
    // Only run this on form.html where the element exists
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            // Use the product's name for display text
            option.textContent = product.name; 
            // Use the product's id for the value attribute
            option.value = product.id;     
            selectElement.appendChild(option);
        });
    }
}

// --- Review Counter Functionality (Step 4.2) ---
function updateReviewCounter() {
    const countElement = document.getElementById('reviewCount');

    // Only run this on review.html where the element exists
    if (countElement) {
        // 1. Get the current count from localStorage, defaulting to 0 if not found
        let reviewCount = parseInt(localStorage.getItem('numReviews')) || 0;
        
        // 2. Increment the count
        reviewCount++;
        
        // 3. Store the new count back into localStorage
        localStorage.setItem('numReviews', reviewCount);
        
        // 4. Display the new count on the page
        countElement.textContent = reviewCount;
    }
}


// --- Main Execution ---
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();

    // Check the current page and run the appropriate functions
    if (document.URL.includes('form.html')) {
        // Form Page
        populateProductSelect();
    } else if (document.URL.includes('review.html')) {
        // Confirmation Page
        updateReviewCounter();
    }
});