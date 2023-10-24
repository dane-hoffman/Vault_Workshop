//Create a string for the user saying: `You have received this message because you have been chosen
// to open an important vault. Here is the secret combination:`

const startMessage = `You have received this message because you have been chosen to open an important vault.`;
const endMessage = `<br>Here is the secret combination:`;
const vaultCombinaiton = `x + y + z`;
const totalMessage = startMessage + endMessage + vaultCombinaiton;


//Assign three variables. Each variable contains the corresponding result of calculation using math operators.
//Each must equal one of the three codes of the combination.
const x = 2+2+2;
const y = (4*4)/2;
const z = (x + y)/(y-x);
console.log(x);
console.log(y);
console.log(z);

//Create a dialogue box displaying the vault codes.
let button = document.getElementById("clickButton");
button.addEventListener('click',function(){
    alert ('The code is' + vaultCombinaiton)
});