// create functions for all logic and call on the functions depending on the needs of the game
// create a restart game function that will be called any time the user wins or loses. 


//     VARIABLES
//     compNum = the randomly generated number that will be displayed to the user (between 19 & 129)
//     winCounter = the number of times the user wins the game
//     lossCounter = the number of times the user losses the game
//     userScore = the variable that will be added to each time the user clicks a crystal


//     GAME LOGIC
//     1. When the game begins:
//     **** setUpGame function () {
//         1. Generate a random number between 19 & 120 
//             - set equal to var compNum
//         2. Generate 4 random numbers between 1 & 12
//             - set each number equal to a different crystal (crystal#)
//         3. Set the variable that will take in the clicks from each crystal to zero (userScore)
//         }

//     2. When the user clicks a crystal
//         1. add the randomly assigned # of that crystal to userNum
//             userScore = userScore + (value of the clicked crystal)
//         2. Evaluate userNum and compNum
//             if (userScore>compNum) {
//                 the user loses
//                 lossCounter++
//                 display a message saying the user has lost and reset all variables
//                     - generate new random compNum and assign
//                     - generate 4 new random crystal numbers and assign
//                     - set userNum back to 0
//             }
//             if (userScore == compNum) {
//                 the user wins
//                 winCounter++
//                 display a message saying the user has won and reset all variables
//                     - generate new random compNum and assign
//                     - generate 4 new random crystal numbers and assign
//                     - set userNum back to 0
//             }

// DECLARE VARIABLES
var compScore;
var userScore = 0;
var imagePuppy;
var winCounter = 0;
var lossCounter = 0;
var imagesArray = ["assets/images/linda.png", "assets/images/tina.jpeg", "assets/images/gene.png", "assets/images/louise.png"];
var randomNum;
var gameStart = false; // when false, will generate random numbers for compScore and puppy inages

// GENERATE DIVS AND CONTENT TO THE DOM
$("#gameName").html("<h1>BOB'S BURGERS</h1>");
$("#numToGuess").html("<h2>Winning Score:</h2><p></p>");
$("#userScore").html("<h3>Your Current Score: </h3><p></p>");
$("#userScore p").append(userScore);
$("#numWins").html("<h3>Wins: </h3> <p></p>");
$("#numWins p").append(winCounter);
$("#numLosses").html("<h3>Losses: </h3><p></p>");
$("#numLosses p").append(lossCounter);

// GENERATE INITIAL COMPSCORE
compScore = Math.floor(Math.random() * (120 - 19) + 19);
$("#numToGuess p").append(compScore);

// CREATE IMAGE DIVS AND ASSIGN NECESSARY ATTRIBUTES
for (var i = 0; i < imagesArray.length; i++) {
    imagePuppy = $("<img>");
    imagePuppy.addClass("puppy-image");
    imagePuppy.attr("id", i);
    imagePuppy.attr("src", imagesArray[i]);
    randomNum = Math.floor(Math.random() * (12 - 1) + 1);
    imagePuppy.attr("num-value", randomNum);
    $("#pictures").append(imagePuppy);
}


// FUNCTION TO GENERATE RANDOM NUMBER FOR COMPSCORE
function pickScore() {
    compScore = Math.floor(Math.random() * (120 - 19) + 19);
    $("#numToGuess p").text(compScore);
};

function resetUserScore() {
    userScore = 0;
        $("#userScore p").text(userScore);
}


// FUNCTION TO GENERATE RANDOM NUMBERS FOR IMAGES
function pickImageNum() {
    randomNum = Math.floor(Math.random() * (12 - 1) + 1);
    $("#0").attr("num-value", randomNum);
    randomNum = Math.floor(Math.random() * (12 - 1) + 1);
    $("#1").attr("num-value", randomNum);
    randomNum = Math.floor(Math.random() * (12 - 1) + 1);
    $("#2").attr("num-value", randomNum);
    randomNum = Math.floor(Math.random() * (12 - 1) + 1);
    $("#3").attr("num-value", randomNum);
}
    

// FUNCTION TO CHECK IF USER HAS WON OR LOST
function checkUserNum(comp, user) {
    if (comp == user) {
        alert("You Won!")
        winCounter++;
        $("#numWins p").text(winCounter);

        pickScore();
        resetUserScore();
        pickImageNum();
    }
    if (comp < user) {
        alert("You Lost!")
        lossCounter++;
        $("#numLosses p").text(lossCounter);

        pickScore();
        resetUserScore();
        pickImageNum();

    }
};

// FUNCTION TO PICK UP ON CLICKS 
$(".puppy-image").on("click", function () {
    var puppyValue = ($(this).attr("num-value"));
    puppyValue = parseInt(puppyValue);
    userScore += puppyValue;

    $("#userScore p").text(userScore);
    checkUserNum(compScore, userScore);

});



