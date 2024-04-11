document.addEventListener('DOMContentLoaded', function() {
    const quoteContainer = document.getElementById('quote-text');
    const fetchButton = document.getElementById('fetch-quote');
    const clearButton = document.getElementById('clear-quote');
  
    // Function to fetch a Kanye quote from the API
    function fetchKanyeQuote() {
            fetch('db.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch quote');
                    }
                    return response.json();
                })
                .then(data => {
                    //quote are stored in an array  in db.json
                    const randomIndex = Math.floor(Math.random() * data.quotes.length);
                    const randomQuote = data.quotes[randomIndex].quote;
                    displayQuote(randomQuote);
                })
                .catch(error => {
                    console.error('Error fetching quotes:', error);
                });
        }
    
    // Function to display the quote on the webpage
    function displayQuote(quote) {
        // text content of the quote container that is to be a received quote
        quoteContainer.textContent = quote;
    }

    // Event listener for a fetch button
    fetchButton.addEventListener('click',fetchKanyeQuote);
  
    // Event listener for a clear button
    clearButton.addEventListener('click',function() {
        quoteContainer.textContent = 'Yeezy Wisdom loading...';
    // changes the button's background color to purple 
    });
    //like button
    let likeCount = 0;
    const likeButton = document.getElementById('like-button');
    const likeCountSpan = document.getElementById('like-count');
    // Event listener for a like button
    likeButton.addEventListener('click', function() {
        likeCount++;
        likeCountSpan.textContent = likeCount;
    });

  
    // Fetch a quote when the page loads
    fetchKanyeQuote();
  });
  
  
