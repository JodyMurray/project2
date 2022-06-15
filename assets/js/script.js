function shake(){
var messageText = document.getElementById("message"),{

document.getElementById('ball') = shake();

setTimeout(function(){ball.classList.remove("shake");}, 1500);

setTimeout(function(){getFortune();}, 1500);
}
}
function getFortune() {
    var fortunes = ['Absolutely so', 'Certainly not', 'Signs point to yes', 'Unable to read now', 'Ask again later', 'Of course!'
    , 'Cannot predict now', 'You may rely on it', 'Outlook does not look good', 'Very doubtful', 'Most likely', 'No',
    'Reply hazy, try again later', 'My sources say no', 'Yes, as I see it']

    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];


var parent = document.getElementById("fortune");
var newMessage = document.createElement("div");
newMessage.setAttribute('id', "message");
newMessage.innerHTML = "\""+fortune+"\"";
parent.appendChild(newMessage);
}
    