// JavaScript to dynamically set the copyright year and last modified date

// Get the element with the ID 'currentyear'
const yearSpan = document.querySelector('#currentyear');

// Create a new Date object to get the current year
const currentYear = new Date().getFullYear();

// Set the content of the span to the current year
yearSpan.textContent = currentYear;

// Get the element with the ID 'lastModified'
const modifiedParagraph = document.querySelector('#lastModified');

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the content of the paragraph to the last modified date
modifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
