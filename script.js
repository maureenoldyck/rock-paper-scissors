(function () {

    document.getElementById("play").addEventListener("click", answer);



    function answer() {

        const choices = ["Scissors", "Rock", "Paper"];
        let computersChoice = choices[Math.floor(Math.random() * choices.length)];
let usersChoice = "Rock";

        if (computersChoice == usersChoice) {
            document.getElementById("answerBox").innerHTML = "You chose: "+ usersChoice +". The computer chose: " + computersChoice + "<br/> Draw. Try again!";
        } else if (computersChoice === "Rock" && usersChoice === "Paper" | computersChoice === "Paper" && usersChoice === "Scissors") {
            document.getElementById("answerBox").innerHTML == "You chose: "+ usersChoice +". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
        } else if (computersChoice === "Scissors" && usersChoice === "Rock") {
            document.getElementById("answerBox").innerHTML = "You chose: "+ usersChoice +". The computer chose: " + computersChoice + "<br/> You won! Congratulations!";
        } else {
            document.getElementById("answerBox").innerHTML = "You chose: "+ usersChoice +". The computer chose: " + computersChoice + "<br/> Too bad, you lost! Try again?";
        }
    };

})();


// document.getElementById("rock").addEventListener("click", function () {
//     console.log("Rock");
//      return "Rock";

//     });

// document.getElementById("paper").addEventListener("click", function () {
//     return "Paper";
// });

// document.getElementById("scissors").addEventListener("click", function () {
//     return "Scissors";
// });