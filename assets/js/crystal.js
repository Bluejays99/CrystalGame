// Game controls:
// 1. Generate a random number for the user to "get"
// 2. Assign a points to each object
// 3. Display object points only when clicked on
// 4. After a object is clicked, add points together and display total score.
// 5. When added score reaches the same number as the random score, user wins.
// 6. When addes score reaches over the same number as the random score,, user losses.
// 7. Each time when the game starts, the game will change the values of each crystal.


// 1. Generate a random number for the user to "get"
var goalNumber = Math.floor(Math.random() * (60 + 1) + 40);
$('#randomanswer').text(goalNumber)
// 2. Assign a points to each object

var crystalNumber = function () {
    return 1 + Math.floor(Math.random() * (10 + 1));
}

$("#madeline").attr("value", crystalNumber());
$(".emily").attr("value", crystalNumber());
$(".minassian").attr("value", crystalNumber());
$(".arlet").attr("value", crystalNumber());
// 3. Display object points only when clicked on

var userNumber = 0;
var gameWin = 0;
var gameLose = 0;

$(".crystal").on("click", function () {

    var crystalNumber = Number($(this).attr("value"));
    console.log(crystalNumber);  // 4. After a object is clicked, add points together and display total score.

    userNumber = userNumber + crystalNumber;

    $("#usernumber").text(userNumber)

    // 5. When added score reaches the same number as the random score, user wins.
    if (userNumber == goalNumber) {
        gameWin++;
        reset()
        $("#wins").text(gameWin);
        alert("Great Job! You Won!")
    }
    // 6. When addes score reaches over the same number as the random score,, user losses.
    else if (userNumber >= goalNumber) {
        gameLose++;
        reset()
        $("#loses").text(gameLose);
        alert("Oops! You went too far over! Try again next time")
    }
});

// 7. Each time when the game starts, the game will change the values of each crystal.
function reset() {
    goalNumber = Math.floor(Math.random() * (60 + 1) + 40);
    $('#randomanswer').text(goalNumber);

    $("#madeline").attr("value", crystalNumber());
    $(".emily").attr("value", crystalNumber());
    $(".minassian").attr("value", crystalNumber());
    $(".arlet").attr("value", crystalNumber());

    userNumber = 0
    $('#usernumber').text(userNumber);
}