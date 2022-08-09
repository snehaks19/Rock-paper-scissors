var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["stone", "paper", "scissor"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];               //img id=stone src=stone.png
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);

    }
}
function selectChoice() {
    you = this.id;
    document.getElementById("yourchoice").src = you + ".png"
    //random for opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponentchoice").src = opponent + ".png";
    //check for winner
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }
    else {
        if (you == "stone") {
            if (opponent == "scissor") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissor") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "stone") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "stone") {
                yourScore += 1;
            }
            else if (opponent == "scissor") {
                opponentScore += 1;
            }
        }

    }
    myfunction()
    function myfunction() {

        if (opponentScore == 5) {

            alert("OPPONENT WON !!!!!!!! Opponent scored 5 faster than you did ")
            location.reload()

        } else if (yourScore == 5) {
            alert("CONGRATULATIONS.......YOU WON!!!!!!!!you scored 5 faster than your opponent ")
            location.reload()

        }
    }
    document.getElementById("yourscore").innerText = yourScore;
    document.getElementById("opponentscore").innerText = opponentScore;

}
