let inputMap = new Map();

function input(messageToUser) {
    return prompt(messageToUser);
}
let player1 = input("First Player");
validateInput(player1);
let player2 = input("Second Player");
validateInput(player2);
inputMap.set(player1, "First Player");
inputMap.set(player2, "Second Player");

function validateInput(userInput) {
    switch (userInput) {
        case "Rock":
            break;
        case "Paper":
            break;
        case "Scissors":
            break;
        default:
            alert("Please enter a valid sign");
    }
}
//inputs given by the players let winner
let winner = findWinner(inputMap);

function findWinner(inputMap) {
    if (inputMap.has("Rock") && inputMap.has("Scissors")) {
        console.log(inputMap.get("Rock") + " is the winner");
    } else if (inputMap.has("Rock") && inputMap.has("Paper")) {
        console.log(inputMap.get("Paper") + " is the winner");
    } else if (inputMap.has("Paper") && inputMap.has("Scissors")) {
        console.log(inputMap.get("Scissors") + " is the winner");
    }
}