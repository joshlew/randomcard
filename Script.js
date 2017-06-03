var suit = ["heart", "spade", "diamond", "club"];
var cardnumber =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


function getSuit (){

return suit[Math.floor(Math.random()*suit.length)];
}


function getCardNumber(){
return cardnumber[Math.floor(Math.random()*cardnumber.length)];
}


function init(){
    
    var ourBeautifulCard = document.querySelector(".card");
    ourBeautifulCard.classList.add(getSuit());
    ourBeautifulCard.innerHTML = getCardNumber();
}

init(); 