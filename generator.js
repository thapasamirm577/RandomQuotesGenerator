let quotes = [' “Live as if you were to die tomorrow. Learn as if you were to live forever.” <br> -Mahatma Gandhi',
                ' “That which does not kill us makes us stronger.” <br> -Friedrich Nietzsche ',
                ' “Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.” <br>-Bernard M. Baruch',
                ' “We must not allow other people’s limited perceptions to define us.” <br>– Virginia Satir',
                ' “Do what you can, with what you have, where you are.” <br> – Theodore Roosevelt',
                ' “Be yourself; everyone else is already taken.” <br> – Oscar Wilde',
                ' “This above all: to thine own self be true.” <br> – William Shakespeare',
                ' “If you cannot do great things, do small things in a great way.” <br>– Napoleon Hill',
                ' “If opportunity doesn’t knock, build a door.” <br>– Milton Berle',
                ' “Wise men speak because they have something to say; fools because they have to say something.” <br>– Plato',
                ' “Strive not to be a success, but rather to be of value.” <br>– Albert Einstein',
                ' “Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”<br> – Robert Frost',
                ' “Do not let what you cannot do interfere with what you can do.” <br>– John Wooden',
                '  “Whenever you find yourself on the side of the majority, it is time to pause and reflect.” <br>– Mark Twain',
                ' “I haven’t failed. I’ve just found 10,000 ways that won’t work.” <br>– Thomas Edison',
                ' “A journey of a thousand leagues begins beneath one’s feet.” <br>– Lao Tzu',
                '  “I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”<br>– Maya Angelou',
                ' "Either you run the day, or the day runs you.”<br>– Jim Rohn',
                ' “Life shrinks or expands in proportion to one’s courage.” <br>– Anais Nin',
                ' “What you do speaks so loudly that I cannot hear what you say.”<br>– Ralph Waldo Emerson',
                ' “Believe and act as if it were impossible to fail.”<br> – Charles Kettering',
                ' “The difference between ordinary and extraordinary is that little extra.” <br>– Jimmy Johnson',
                '  “If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?”<br>– Rabbi Hillel'
]

const quote = document.getElementById('quote');
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const numVal = randomQuote();
    quote.innerHTML = quotes[numVal];
    
})

function randomQuote(){
    return num = Math.floor((Math.random()*quotes.length));
    
}
