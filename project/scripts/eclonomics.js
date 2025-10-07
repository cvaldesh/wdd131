// Constants and Objects
const API_URL = 'https://mindicador.cl/api';
const indicatorTargets = {
    uf: document.getElementById('uf-value'),
    dolar: document.getElementById('dolar-value'),
    euro: document.getElementById('euro-value')
};

// Array of indicators to display and fetch from the API
const INDICATORS_TO_FETCH = ['uf', 'dolar', 'euro'];

/**
 * Function 1: Updates the Chilean date and time in the top-right corner.
 */
function updateDateTime() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZone: 'America/Santiago' 
    };
    const now = new Date();
    // Use 'en-US' locale for output, but keep the Chilean timezone
    // Using a template literal for string construction
    const dateTimeString = `${now.toLocaleDateString('en-US', options)}`;
    
    // DOM Interaction: Selecting and Modifying an element
    const dateTimeElement = document.getElementById('date-time-display');
    if (dateTimeElement) {
        dateTimeElement.innerHTML = dateTimeString;
    }
}

/**
 * Function 2: Fetches the economic indicators from the API and displays them.
 */
async function fetchAndDisplayIndicators() {
    // 1. Conditional Branching & localStorage Check (Simple Caching)
    const cachedData = localStorage.getItem('eclonomicsIndicators');
    const cacheTimestamp = localStorage.getItem('eclonomicsTimestamp');
    const now = Date.now();
    const CACHE_DURATION = 3600000; // 1 hour in milliseconds

    if (cachedData && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
        console.log('Using data from localStorage (recent cache).');
        // DOM Interaction: Modifying elements using cached data
        updateDOM(JSON.parse(cachedData));
        return; // Exit function if cache is valid
    }

    // 2. Fetch Data from API
    try {
        const response = await fetch(API_URL);
        
        // Conditional Branching: Check for successful response
        if (!response.ok) {
            throw new Error(`API response error: ${response.status}`);
        }
        
        const data = await response.json();

        // 3. Process Data (Using Array and Array Methods)
        const currentIndicators = INDICATORS_TO_FETCH.reduce((acc, code) => {
            // Conditional Branching: Ensure the indicator exists in the API response
            if (data[code] && data[code].valor) {
                // Object use: data[code] is an object
                acc[code] = {
                    valor: data[code].valor,
                    unidad_medida: data[code].unidad_medida,
                    fecha: data[code].fecha 
                };
            }
            return acc;
        }, {});

        // 4. Update DOM and localStorage
        updateDOM(currentIndicators);
        // Use localStorage to store processed data as JSON string
        localStorage.setItem('eclonomicsIndicators', JSON.stringify(currentIndicators));
        localStorage.setItem('eclonomicsTimestamp', now.toString());

    } catch (error) {
        console.error('Error fetching indicators:', error);
        // DOM Interaction: Modifying elements for error state
        INDICATORS_TO_FETCH.forEach(code => {
            if (indicatorTargets[code]) {
                indicatorTargets[code].innerHTML = `Error: ${code.toUpperCase()}`;
            }
        });
    }
}

/**
 * Function 3: Injects indicator data into the HTML.
 * @param {object} data - Object containing the indicator values.
 */
function updateDOM(data) {
    INDICATORS_TO_FETCH.forEach(code => {
        const indicator = data[code];
        if (indicator && indicatorTargets[code]) {
            // Template Literals: Building the output string
            let formattedValue = '';
            
            // Conditional Branching for formatting currency values
            if (code === 'uf' || code === 'dolar' || code === 'euro') {
                // Format as currency for Chile (CLP), ensuring correct decimal/thousands separator
                formattedValue = `$${indicator.valor.toLocaleString('es-CL', { maximumFractionDigits: 2 })}`;
            } else {
                formattedValue = indicator.valor;
            }

            indicatorTargets[code].innerHTML = `${formattedValue} Chilean Pesos`;
        }
    });
}

// Script Initialization
document.addEventListener('DOMContentLoaded', () => {
    // DOM Interaction: Listening for an event (DOMContentLoaded)
    
    // Initialize date and time
    updateDateTime();
    // Update every second for a "live" feel
    setInterval(updateDateTime, 1000); 

    // Load and display indicators
    fetchAndDisplayIndicators();
});
