document.addEventListener("DOMContentLoaded", function() {
    const quoteContainer = document.getElementById('quoteContainer');

    // Function to fetch a new quote
    function getQuote() {
        fetch("https://api.kanye.rest/")
            .then(response => response.json())
            .then(data => {
                displayQuote(data.quote);
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
            });
    }

    // Function to display a quote
    function displayQuote(quote) {
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${quote}"`;
        quoteContainer.appendChild(quoteElement);
    }

    // Fetch a quote when the page loads
    getQuote();
});
