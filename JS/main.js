// Uaing API
const apiURL = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'jSA05T1S1Znoa06ejGSU5Q==ZzmEjCWRI1nITVQq';

var button = document.getElementById("newQoute");
var text = document.querySelector(".qoute-text");
var author = document.querySelector(".qoute-author");

async function fetchQuote() {
  try {
    const response = await fetch(apiURL, {
      headers: {
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length > 0) {
      const quoteData = data[0];
      text.innerHTML = quoteData.quote;
      author.innerHTML = quoteData.author;
    } else {
      text.innerHTML = "No quotes found.";
      author.innerHTML = "";
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    text.innerHTML = "Failed to load quote.";
    author.innerHTML = "";
  }
}

button.addEventListener("click", fetchQuote);

fetchQuote();
