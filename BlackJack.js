function firstFunc()
{
alert("Congrats on getting through your first function.  HooRay");
}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert ("average = " + avg);
}

function playBlackJack()
{
    var player1 =  Math.ceil(Math.random() * 21);
    var player2 =  Math.ceil(Math.random() * 21);
    document.getElementById("player1Score").innerHTML = player1;
    document.getElementById("player2Score").innerHTML = player2;
   
    if (player1 == player2)
        {
            document.getElementById("finalResult").innerHTML = "DRAW";
        }
        else if ((player1 < player2) )
        {
            document.getElementById("finalResult").innerHTML = "Player 1 Loses";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "Player 1 Wins";
        }
        
}