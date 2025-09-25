// Temples Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "St. George Utah",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6",
      area: 143969,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-1033036-wallpaper.jpg"
    },
    {
      templeName: "London England",
      location: "Newchapel, Surrey, England",
      dedicated: "1958, September, 7",
      area: 42652,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-857500-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-city-utah-temple-1662450.jpg"
    },
];

// Reference to the temple grid container
const templeGrid = document.querySelector('.temple-grid');

// Function to display temples
const displayTemples = (templesToDisplay) => {
    // Clear existing content
    templeGrid.innerHTML = ''; 

    templesToDisplay.forEach(temple => {
        // Create elements
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const locationPara = document.createElement('p');
        const dedicatedPara = document.createElement('p');
        const areaPara = document.createElement('p');

        // Set content and attributes
        figcaption.textContent = temple.templeName;
        locationPara.textContent = `Location: ${temple.location}`;
        dedicatedPara.textContent = `Dedicated: ${temple.dedicated}`;
        areaPara.textContent = `Size: ${temple.area} sq ft`;
        
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy'; 

        // Append to figure
        figure.appendChild(figcaption);
        figure.appendChild(locationPara);
        figure.appendChild(dedicatedPara);
        figure.appendChild(areaPara);
        figure.appendChild(img);

        // Append to grid
        templeGrid.appendChild(figure);
    });
};

// Navigation links
const homeLink = document.querySelector('header nav a:nth-child(1)');
const oldLink = document.querySelector('header nav a:nth-child(2)');
const newLink = document.querySelector('header nav a:nth-child(3)');
const largeLink = document.querySelector('header nav a:nth-child(4)');
const smallLink = document.querySelector('header nav a:nth-child(5)');

// Add event listeners
homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    displayTemples(temples);
});

oldLink.addEventListener('click', (event) => {
    event.preventDefault();
    const oldTemples = temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        return dedicatedYear < 1900;
    });
    displayTemples(oldTemples);
});

newLink.addEventListener('click', (event) => {
    event.preventDefault();
    const newTemples = temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        return dedicatedYear > 2000;
    });
    displayTemples(newTemples);
});

largeLink.addEventListener('click', (event) => {
    event.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

smallLink.addEventListener('click', (event) => {
    event.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

// Dynamic footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial display of all temples when the page loads
displayTemples(temples);