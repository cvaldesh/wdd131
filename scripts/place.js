document.addEventListener('DOMContentLoaded', function() {
    // Static values for temperature and wind speed
    const tempCelsius = 8;
    const windSpeedKmph = 8;

    // Function to calculate windchill
    const calculateWindChill = (temperature, windSpeed) => {
        // Metric windchill formula
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    };

    // Get HTML elements
    const windchillElement = document.getElementById('windchill');
    const currentYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastmodified');

    // Display windchill or "N/A"
    if (tempCelsius <= 10 && windSpeedKmph > 4.8) {
        const windchill = calculateWindChill(tempCelsius, windSpeedKmph);
        windchillElement.textContent = `${windchill}°C`;
    } else {
        windchillElement.textContent = 'N/A';
    }

    // Set the current year
    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    // Set the last modified date
    lastModifiedElement.textContent = document.lastModified;
});