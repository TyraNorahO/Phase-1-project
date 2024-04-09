document.addEventListener('DOMContentLoaded', function() {
    const quoteContainer = document.getElementById('quote-text');
    const fetchButton = document.getElementById('fetch-quote');
    const clearButton = document.getElementById('clear-quote');
  
    // Function to fetch a Kanye quote from the API
    function fetchKanyeQuote() {
        fetch('https://api.kanye.rest/')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to generate quote');
                }
                return res.json();
            })
            .then(data => {
                displayQuote(data.quote);
            })
            .catch(error => {
                console.error('Error in generating quote:', error);
            });
    }
    
    // Function to display the quote on the webpage
    function displayQuote(quote) {
        // text content of the quote container that is to be a received quote
        quoteContainer.textContent = quote;
    }
    // Event listener for 
    // Event listener for a fetch button
    fetchButton.addEventListener('click',fetchKanyeQuote);
  
    // Event listener for a clear button
    clearButton.addEventListener('click',function() {
        quoteContainer.textContent = 'Yeezy Wisdom loading...';
    // changes the button's background color to
    });

  
    // Fetch a quote when the page loads
    fetchKanyeQuote();
  });