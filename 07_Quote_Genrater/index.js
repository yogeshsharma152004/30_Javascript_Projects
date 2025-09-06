const quote = document.getElementById("quote");

const author = document.getElementById("author");

const API_URL = "https://random-quotes-freeapi.vercel.app/api/random";


async function getquote(url){
    const response = await fetch(url);

    var data = await response.json();
    

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    
}
getquote(API_URL);

function tweet(){
    window.open( "https://twitter.com/intent/tweet?text=" + quote.innerHTML  + "---- by  " + author.innerHTML, "Tweet Window" , "width=600 , height-300")
}

