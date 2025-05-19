//  List Of Qoutes
const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

// Finction To Help me insert New element In Array
function addQuote(text, author) {
  quotes.push({
    quote: text,
    author: author,
  });
}

addQuote(
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "Albert Einstein"
);

addQuote(
  "A room without books is like a body without a soul.",
  "Marcus Tullius Cicero"
);

addQuote(
  "I love you as certain dark things are loved, secretly, between the shadow and the soul.",
  "Pablo Neruda"
);

addQuote(
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "Dr. Seuss"
);

addQuote(
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "Martin Luther King "
);

addQuote(
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  "Friedrich Nietzsche"
);

addQuote(
  "I'm not afraid of death; I just don't want to be there when it happens.",
  "Woody Allen"
);

addQuote(
  "To the well-organized mind, death is but the next great adventure.",
  "J.K. Rowling"
);

addQuote(
  "A thing is not necessarily true because a man dies for it.",
  "Oscar Wilde"
);

// Call Items in HTML
var button = document.getElementById("newQoute");
var text = document.querySelector(".qoute-text");
var author = document.querySelector(".qoute-author");

// roandom Object Qoute
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
let newRandomQuote;

// To Show Me Qoute When I Open
text.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;

// Event When I click |||  I have Another Way To make it if i write call Function in buttonHtml onClick
button.addEventListener("click", function () {
  do {
    newRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (randomQuote === newRandomQuote);

  randomQuote = newRandomQuote;

  text.innerHTML = randomQuote.quote;
  author.innerHTML = randomQuote.author;
});
