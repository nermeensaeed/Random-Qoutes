var qoute = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");

var qoutes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        quote:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sig like there's nobody listening,And live like it's heaven on earth.",
        author:"William W. Purkey"
    },
    {
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost"
    },
    {
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:"Marilyn Monroe"
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Marcus Tullius Cicero"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch"
    },
]
var colors = [
    "#FF76CE",
    "#FDFFC2",
    "#94FFD8",
    "#A3D8FF",
    "#FFEAE3",
    "#FFCBCB",
    "#FFB1B1",
    "#ED9455",
    "#B5C18E",
    "#DEAC80"
]
setTimeout(function(){
        document.getElementById("loading").style.display="none"
        document.getElementById("page").style.display="block"
    }, 1000)

    btn.addEventListener("click" , function(){
        document.getElementById("loading").style.display="block"
        setTimeout(function(){
        document.getElementById("loading").style.display="none"
        document.getElementById("page").style.display="block"
    }, 800)
        random();
    })

    var lastIndex = -1
    function random(){
        var randomIndex = Math.floor(Math.random() * qoutes.length)
        while(lastIndex === randomIndex){
            randomIndex = Math.floor(Math.random() * qoutes.length)
        }
        lastIndex = randomIndex
        var random = qoutes[randomIndex] ;
        var randomAuthor = random.author ;
        var randomQuote =random.quote ; 
        qoute.innerHTML = "“ " + randomQuote + " ”" ;
        author.innerHTML = "― " + randomAuthor ;
        var randomColors = colors[Math.floor(Math.random() * colors.length)];
        qoute.style.color = randomColors;
        btn.style.backgroundColor = randomColors;
    }