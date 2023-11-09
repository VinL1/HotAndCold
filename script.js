var guess = 50;
var number = Math.floor(Math.random() * 100 + 1);
var distance = Math.abs(guess - number);
var turns = 5;
var row = "a";
const turna = document.getElementById("turns");
const num = document.getElementById("guess");
const sub = document.getElementById("submit");
const rest = document.getElementById("reset");

function setValue(){
    if(guess > 100 || guess < 1){
        alert("Enter a valid number between 1 - 100!");
        return;
    }

    distance = Math.abs(guess - number);
    turns --;
    addToTable(guess, distance, findTemp(guess));
    
    if (turns == 0) {
        alert("You ran out of turns! The number was: " + number + ".");
        num.disabled = true;
        disableButtons();
        turna.innerHTML = 0;
    }else if(guess == number){
        alert("Congrats! You have correctly guessed the number. Please reset the page or press the reset button to continue playing!");
        num.disabled = true;
        disableButtons();
        turna.innerHTML = 99999999;
    }else{
        turna.innerHTML = turns;
        document.getElementById("message").innerHTML = "Your guess was: " + distance + " away from the answer. " + findTemp(guess) + "!";
    }
}

function addToTable(guess, distance, temperature){
    document.getElementById(row+1).innerText = guess;
    document.getElementById(row+2).innerText = distance;
    document.getElementById(row+3).innerText = temperature;
    if (row != "e"){
        let charCode = row.charCodeAt(0);
        charCode = (charCode - 97 + 1) % 26 + 97;
        row = String.fromCharCode(charCode);
    }else{
        row = "a";
    }
}

function findTemp(number){
    if (guess - number < 6) {
        return "Very Hot";
    }
    if (guess - number < 9) {
        return "Hot";
    }
    if (guess - number < 16) {
        return "Very Warm";
    }
    if (guess - number < 21) {
        return "Warm";
    }
    if (guess - number < 31) {
        return "Cool";
    }
    if (guess - number < 41) {
        return "Very Cool";
    }
    if (guess - number < 56) {
        return "Cold";
    }
    else {
        return "Very Cold ";
    }
}

function incrementGuess(increment){
    guess = guess + increment;
    num.value = guess;
}

sub.addEventListener("click", setValue);
document.getElementById("base" + 1).innerText = guess;
document.getElementById("base" + 2).innerText = distance;
document.getElementById("base" + 3).innerText = findTemp(guess);
arr = [1, 5, 10, 25];

for (let incredible = 0; incredible < arr.length; incredible++) {
    document.getElementById("inc" + arr[incredible]).addEventListener("click", function() {
        incrementGuess(arr[incredible]);
    });

    document.getElementById("dec" + arr[incredible]).addEventListener("click", function() {
        incrementGuess(-1 * arr[incredible]);
    });
}

function disableButtons(){
    for (let incredible = 0; incredible < arr.length; incredible++) {
        document.getElementById("inc" + arr[incredible]).disabled = true;
        document.getElementById("dec" + arr[incredible]).disabled = true;
    }
    sub.disabled = true;
}