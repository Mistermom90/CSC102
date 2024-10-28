function firstFunc()
{
alert("you have made your first function!  Yay")
}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert ("average = " + avg)
}

function PlayRPS()
{
    var player1 = Math.ceil(Math.random()*3);
    var player2 = Math.ceil(Math.random()*3);
    var rockimage = "RockImage.jpeg";
    var paperimage = "PaperImage.jpeg";
    var scissorimage = "ScissorImage.jpeg";

    if (player1 == 1)
    {
        document.getElementById("player1Img").src = rockimage;
    }
    else if (player1 == 2)
    {
        document.getElementById("player1Img").src = paperimage;
    }
    else
    {
        document.getElementById("player1Img").src = scissorimage;
    }
    if (player2 == 1)
        {
            document.getElementById("player2Img").src = rockimage;
        }
        else if (player2 == 2)
        {
            document.getElementById("player2Img").src = paperimage;
        }
        else
        {
            document.getElementById("player2Img").src = scissorimage;
        }

        if (player1 == player2)
        {
            document.getElementById("finalResult").innerHTML = "DRAW";

        }
        else if ((player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 3) || (player1 == 3 && player2 == 1))
        {
            document.getElementById("finalResult").innerHTML = "Player 1 Loses";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "Player 1 Wins";
        }
        // && means and.  || means or.
}