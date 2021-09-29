
let player={
    name: "Per",
    chips: 200,
    
}

 //player.sayHello()

let cards= []
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEL= document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEL=document.getElementById("cards-el")
console.log(cards)




let playerEL=document.getElementById("player-el")
playerEL.textContent = player.name+": $"+player.chips

function getRandomCard(){

    let randomNumber= Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }

     
}


function startGame(){
    isAlive= true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEL.textContent="Cards: "
    for (let i=0;i<cards.length;i++){
        
        cardsEL.textContent= cardsEL.textContent+" "+cards[i]
    }
   // cardsEL.textContent="Cards: "+cards[0]+" "+cards[1]
    sumEL.textContent="Sum: "+sum
    if(sum<=20){
        message= "Do you want to draw a new card"
    
    }
    else if(sum===21){
        message= "You have got Blackjack"
        hasBlackJack=true
    }
    else{
        message= "You are out of the game"
        isAlive=false
    }
    
    messageEL.textContent = message

}


function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let card=getRandomCard()
        sum +=card 
        cards.push(card)
        renderGame()
    }
    
}





