
let sum=0;
let cards=[];
let hasBlackJack=false;
let isLive=false;
let messege="";
let messageEl=document.getElementById("message-el");
//let sumEl=document.getElementById("sum-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function startGame(){
    if(sum==0||sum>20){
        cards=[];
        hasBlackJack=false;
        isLive=true;
        let firstCard=getRandomCard();
        let secondCard=getRandomCard(); 
        sum=firstCard+secondCard;
        cards=[firstCard,secondCard];
        renderGame()
    }
}
function getRandomCard(){
   let randomNumber= Math.floor(Math.random()*13)+1
   if(randomNumber===1)
   return 11;
   else if(randomNumber>=11 && randomNumber<=13)
   return 10;
   else
   return randomNumber;
}
function renderGame(){
    cardsEl.textContent="";
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent=sum;
    if(sum <= 20){
        messege="Do you want to draw a new card?";
        document.getElementById("start_game").classList.add("dis");
        document.getElementById("new_card").classList.remove("dis");
    }else if(sum===21){
        messege="You've got blackjack!";
        hasBlackJack=true;
        document.getElementById("start_game").classList.remove("dis");
        document.getElementById("new_card").classList.add("dis");
    }else {
        messege="You're out of the game!";
        isLive=false;
        document.getElementById("start_game").classList.remove("dis");
        document.getElementById("new_card").classList.add("dis");
    }
    messageEl.textContent=messege;
}
function newCard(){
    if(isLive===true && hasBlackJack===false){
        let card=getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}