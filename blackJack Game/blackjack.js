let firstcard = 2;
let secondcard = 10
let sum = firstcard + secondcard 
let track = false
let alive = true
let card = document.getElementById("card")
let sumcard = document.getElementById("sum")
let message = ""
let messageel = document.querySelector("#message-el")
function startgame()
{
    rendergame()
}
function rendergame(){
    if (sum <= 20)
    {
     card.textContent = "Cards are : " + firstcard + " " + secondcard
     sumcard.textContent = "Sum is : " + sum 
     message = "do you want to draw card again?"
    }
    else if (sum === 21)
    {
        card.textContent = "Cards are : " + firstcard + " " + secondcard
        sumcard.textContent = "Sum is : " + sum 
        message = "woah! you got a jackback!!"
        track = true
    }
    else
    {
        card.textContent = "Cards are : " + firstcard + " " + secondcard
        sumcard.textContent = "Sum is : " + sum 
        message = "Ops! You lose!"
        alive = false
    }
    messageel.textContent = message
}
function newcard()
{
    let card  = 9;
    sum = sum + card
    rendergame()
}