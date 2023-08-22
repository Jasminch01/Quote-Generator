const jokesBtn = document.getElementById("jokes-btn");

var quotes = [
  {
    quote:
      "My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher.",
    author: "Socrates",
  },
  {
    quote:
      "If you want to be sure that you never forget your wife’s birthday, just forget it once.",
    author: "H. V. Prochnow",
  },
  {
    quote: "People say nothing is impossible, but I do nothing every day.",
    author: "A. A. Milne",
  },
  {
    quote:
      "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    author: "Abraham Lincoln",
  },
  {
    quote: "If I were two-faced, would I be wearing this one?",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    author: "Alan Dundes",
  },
  {
    quote:
      "The difference between stupidity and genius is that genius has its limits.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Do not take life too seriously. You will never get out of it alive.",
    author: "Elbert Hubbard",
  },
  {
    quote: "War is God’s way of teaching Americans geography.",
    author: "Ambrose Bierce",
  },
  {
    quote:
      "If you want your children to listen, try talking softly to someone else.",
    author: "Ann Landers",
  },
  {
    quote:
      "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "A smile is a facelift that’s in everyone’s price range!",
    author: "Tom Wilson",
  },
  {
    quote:
      "A bank is a place that will lend you money if you can prove that you don’t need it.",
    author: "Bob Hope",
  },
  {
    quote: "My favorite machine at the gym is the vending machine.",
    author: "Caroline Rhea",
  },
  {
    quote:
      "I always arrive late at the office, but I make up for it by leaving early.",
    author: "Charles Lamb",
  },
];
jokesBtn.addEventListener("click", function (e) {
  let p = e.target.parentElement.parentElement.children[2];
  let author = e.target.parentElement.parentElement.children[3];
  
  const rendomQuotes = Math.floor(Math.random()*quotes.length);
  const newquote = quotes[rendomQuotes].quote;
  console.log(newquote)
  p.innerText = newquote;
  const parson = quotes[rendomQuotes].author;
  author.innerText = parson;
});
