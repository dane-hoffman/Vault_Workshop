//Create a string for the user saying: `You have received this message because you have been chosen
// to open an important vault. Here is the secret combination:`
const userMessage = "You have received this message because you have been chosen to open an important vault.<br>Here is the secret combination: x + y + z";

function displayMessage() {
    const messageSection = document.getElementById("userMessage");
    messageSection.innerHTML = userMessage;
}

window.addEventListener("load", displayMessage);

//Assign three variables. Each variable contains the corresponding result of calculation using math operators.
//Each must equal one of the three codes of the combination.
const x = 2 + 2 + 2;
const y = (4 * 4) - (3 * 3);
const z = (x + y) / (y - x);
const vaultCombination = x + y + z;

//Create a dialogue box displaying the vault codes.
let button = document.getElementById("clickButton");
button.addEventListener('click', function () {
    alert('The answer is: ' + vaultCombination);
});