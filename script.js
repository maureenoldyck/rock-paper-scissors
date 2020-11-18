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

        } else if (computersChoice == "Rock" && usersChoice == "Paper" || computersChoice == "Paper" && usersChoice == "Scissors" || computersChoice == "Scissors" && usersChoice == "Rock") {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
            document.getElementById("answerBox").style.color = "#6AB96D";

        } else {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Too bad, you lost! But you can try again!";
            document.getElementById("answerBox").style.color = "#A52C00";
        }
// Change the button Play to Play Again
        document.getElementById("play").innerHTML = "Play Again!";

// Else if function for the VS Computer Image
        if (computersChoice === "Rock") {
            return document.getElementById("computerImage").src = "images/stone.png";
        }
        else if (computersChoice === "Scissors") {
            return document.getElementById("computerImage").src = "images/scissors.png";
        }
        else if (computersChoice === "Paper") {
            return document.getElementById("computerImage").src = "images/document.png";
        }
        else {
            return document.getElementById("computerImage").src = "images/information.png";
        }

        
    };


})();