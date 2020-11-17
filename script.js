(function () {


        let usersChoice;

        document.getElementById("rock").addEventListener("click", function () {
            usersChoice = "Rock";
            return usersChoice;
        });

        document.getElementById("paper").addEventListener("click", function () {
            usersChoice = "Paper";
            return usersChoice;
        });

        document.getElementById("scissors").addEventListener("click", function () {
            usersChoice = "Scissors";
            return usersChoice;
        });




    document.getElementById("play").addEventListener("click", answer);




    function computer() {
        const choices = ["Scissors", "Rock", "Paper"];
        return choices[Math.floor(Math.random() * choices.length)];
    }




    function answer() {
        const computersChoice = computer();

        if (computersChoice == usersChoice) {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Draw. Try again!";
            document.getElementById("answerBox").style.color = "#6989AA";
        } else if (computersChoice === "Rock" && usersChoice === "Paper" | computersChoice === "Paper" && usersChoice === "Scissors") {
            document.getElementById("answerBox").innerHTML == "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
            document.getElementById("answerBox").style.color = "#6AB96D";
        } else if (computersChoice === "Scissors" && usersChoice === "Rock") {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
            document.getElementById("answerBox").style.color = "#6AB96D";
        } else {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Too bad, you lost! But you can try again!";
            document.getElementById("answerBox").style.color = "#A52C00";
        }

        document.getElementById("play").innerHTML = "Play Again!";

    };


})();