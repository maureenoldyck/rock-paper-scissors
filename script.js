(function () {

    // Define the user button choices
    let usersChoice;

    document.getElementById("rock").addEventListener("click", function () {
        usersChoice = "Rock";
        document.getElementById("userImage").src = "images/stone.png";
        return usersChoice;
    });

    document.getElementById("paper").addEventListener("click", function () {
        usersChoice = "Paper";
        document.getElementById("userImage").src = "images/document.png";
        return usersChoice;

    });

    document.getElementById("scissors").addEventListener("click", function () {
        usersChoice = "Scissors";
        document.getElementById("userImage").src = "images/scissors.png";
        return usersChoice;
    });


    // Variables for the Score Board (outside the Answer function otherwise they reinitialized everytime you call the function)
    let userScore = 0;
    let computerScore = 0;
    let round = 0;
    let ties = 0;


    document.getElementById("play").addEventListener("click", answer);



    // Function to get the random answer for computer
    function computer() {
        const choices = ["Scissors", "Rock", "Paper"];
        return choices[Math.floor(Math.random() * choices.length)];
    }





    function answer() {

        const computersChoice = computer();

        // Else if function for the Answer Box
        if (computersChoice == usersChoice) {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Draw. Try again!";
            document.getElementById("answerBox").style.color = "#6989AA";
            ties++;
        } else if (computersChoice == "Rock" && usersChoice == "Paper" || computersChoice == "Paper" && usersChoice == "Scissors" || computersChoice == "Scissors" && usersChoice == "Rock") {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
            document.getElementById("answerBox").style.color = "#6AB96D";
            userScore++;
        } else if (usersChoice == undefined) {
            document.getElementById("answerBox").innerHTML = "Please choose a weapon before you play!";
            document.getElementById("answerBox").style.color = "#6989AA";
        } else {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Too bad, you lost! But you can try again!";
            document.getElementById("answerBox").style.color = "#A52C00";
            computerScore++;
        }

        // Change the button Play to Play Again
        document.getElementById("play").innerHTML = "Play Again!";
        round++;
        document.getElementById("round").innerHTML = round;
        document.getElementById("userPoints").innerHTML = userScore;
        document.getElementById("ties").innerHTML = ties;
        document.getElementById("computerPoints").innerHTML = computerScore;



        // Else if function for the VS Computer Image
        if (computersChoice === "Rock") {
            return document.getElementById("computerImage").src = "images/stone.png";
        } else if (computersChoice === "Scissors") {
            return document.getElementById("computerImage").src = "images/scissors.png";
        } else if (computersChoice === "Paper") {
            return document.getElementById("computerImage").src = "images/document.png";
        } else {
            return document.getElementById("computerImage").src = "images/information.png";
        }


    };


// function to refresh the page, to start a new game
function restart() {
    window.location.reload();
}

document.getElementById("refresh").addEventListener("click", restart);



})();