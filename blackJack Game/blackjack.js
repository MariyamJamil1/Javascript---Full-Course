let firstcard = 2;
let secondcard = 10
let cards = [firstcard , secondcard]
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

    let renderedarray = [] ;
    card.textContent = "Cards are: ";
    for (let i = 0 ; i < cards.length ; i++)
    {
        if(!renderedarray.includes(cards[i]))
        {
            card.textContent += cards[i] + " " 
        }
        renderedarray.push[card[i]]
    }
    sumcard.textContent = "Sum is : " + sum 
    
    if (sum <= 20)
    {
     message = "do you want to draw card again?"
    }
    else if (sum === 21)
    {

        message = "woah! you got a jackback!!"
      
    }
    else
    {
        message = "Ops! You lose!"
     
    }
    messageel.textContent = message
}
function newcard()
{
    if (sum < 20)
    {
        let card  = 5;
        sum = sum + card
        cards.push(card)
        rendergame()
    }
    if (sum > 20){
        document.getElementById("new-card").style.visibility = 'hidden'
    }
}
