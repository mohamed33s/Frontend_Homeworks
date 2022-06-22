
//This function sums the numbers from 1 to 5

function summation(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++){
      sum += i;
  } 
  return sum;
}

//This function sums even numbers from 1 to 5

function summation_even(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++){
          if (i % 2 == 0) {
            sum += i;
          }
  }

  return sum;
}

console.log(`The sum of the numbers from 1 to ${5} is :${summation(5)}`);

console.log( `The sum of the even numbers from 1 to ${5} is :${summation_even(5)}`);
