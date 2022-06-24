const quotes = [
    {quote: "Philosophy teaches us to act, not to speak-",
    author: "Epictetus"}, 
    {quote:"Only attend to yourself, and resolve to be a good man in every act that you do-",
     author:"Marcus Aurelius"},
    {quote:"Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside-", 
    author:"Marcus Aurelius"},
    {quote:"You have power over your mind - not outside events. Realize this, and you will find strength-",
     author:"Marcus Aurelius"},
    {quote:"When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval-",
     author:"Epictetus"},
]

const guotes = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const random = quotes[Math.floor(Math.random()*quotes.length)];

guotes.innerText = random.quote;
author.innerText = random.author;
