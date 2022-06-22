/*
Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.
1) Write down pseudocode for the following program.
2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)
3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
*/
/*
function rollDice() {
 random1 = Math.floor(Math.random() * 6) + 1;
 random2 = Math.floor(Math.random() * 6) + 1;


  console.log(random1);
  console.log(random2);

  firstDie = ' dice- ' + random1;
  secondDie = ' dice- ' + random2;

  var span = document.getElementById("first-die");
  span.setAttribute("class", firstDie);

  var span = document.getElementById("second-dice");
  span.setAttribute("class", secondDie);
}
*/

//This function rolls the dice randomly

function dice_roll() {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  console.log(random1);
  console.log(random2);

  let firstDie = "dice-" + random1;
  let secondDie = "dice-" + random2;
  console.log(firstDie);
  console.log(secondDie);

  let die1 = document.getElementById("first-die");
  die1.setAttribute("class", firstDie);

  let die2 = document.getElementById("second-die");
  die2.setAttribute("class", secondDie);
}
