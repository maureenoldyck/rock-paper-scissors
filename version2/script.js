(function () {

    // Define the user button choices
    let usersChoice;

    document.getElementById("elephant").addEventListener("click", function () {
        usersChoice = "Elephant";
        document.getElementById("imageUser").src = "images/elephant.png";
        return usersChoice;
    });

    document.getElementById("mouse").addEventListener("click", function () {
        usersChoice = "Mouse";
        document.getElementById("imageUser").src = "images/mouse.png";
        return usersChoice;

    });

    document.getElementById("cat").addEventListener("click", function () {
        usersChoice = "Cat";
        document.getElementById("imageUser").src = "images/cat.png";
        return usersChoice;
    });


    // Variables for the Score Board (outside the Answer function otherwise they reinitialized everytime you call the function)
    let userScore = 0;
    let computerScore = 0;
    let round = 0;
    let ties = 0;



    // Function to get the random answer for computer
    function computer() {
        const choices = ["Cat", "Elephant", "Mouse"];
        return choices[Math.floor(Math.random() * choices.length)];
    }



    document.getElementById("play").addEventListener("click", answer);


    function answer() {

        const computersChoice = computer();

        // Else if function for the Answer Box
        if (computersChoice == usersChoice) {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Let's have a " + usersChoice + " party or you can try again!";
            document.getElementById("answerBox").style.color = "#6989AA";
            ties++;
        } else if (computersChoice == "Elephant" && usersChoice == "Mouse" || computersChoice == "Mouse" && usersChoice == "Cat" || computersChoice == "Cat" && usersChoice == "Elephant") {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> You scared away the " + computersChoice + "! Congratulations!";
            document.getElementById("answerBox").style.color = "#6AB96D";
            userScore++;
        } else {
            document.getElementById("answerBox").innerHTML = "You chose: " + usersChoice + ". The computer chose: " + computersChoice + "<br/> Oh no you got in the way of a " + computersChoice + "! But you can try again!";
            document.getElementById("answerBox").style.color = "#A52C00";
            computerScore++;
        }

        //Change the button Play to Play Again
        document.getElementById("play").innerHTML = "Play Again!";
        round++;
         document.getElementById("round").innerHTML = round;
         document.getElementById("userPoints").innerHTML = userScore;
         document.getElementById("ties").innerHTML = ties;
         document.getElementById("computerPoints").innerHTML = computerScore;

    


        // Else if function for the VS Computer Image
        if (computersChoice === "Elephant") {
            return document.getElementById("computerImage").src = "images/elephant.png";
        } else if (computersChoice === "Cat") {
            return document.getElementById("computerImage").src = "images/cat.png";
        } else {
            return document.getElementById("computerImage").src = "images/mouse.png";
        };

    };

})();