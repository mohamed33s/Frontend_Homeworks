//solve question 1 (forEach method)
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});
console.log("-----------------------------------------------" + "\n");

//solve question 2 (map method)
const nums = [1, 5, 8];
let addPower = nums.map((x) => x ** 2);
console.log(addPower);
console.log("-----------------------------------------------" + "\n");

//solve question 3 (map method)
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
let addStr = instructors.map((x) => x + " is awesome");
console.log(addStr);
console.log("-----------------------------------------------" + "\n");

//solve question 4 (reduce method)
const numss = [25, 6, 8, 3];
const odevenNumbersds = numss.filter((number) => number % 2 == 0);
console.log(odevenNumbersds);

let sum = odevenNumbersds.reduce((acc, num) => acc + num, 0);
console.log(sum);
console.log("-----------------------------------------------" + "\n");

//solve question 5 (filter method)
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((x) => x == "jerks");
console.log(jerks);
console.log("-----------------------------------------------" + "\n");

//solve question 6 part1 (arrow function)
let avg = (numbers) => {
  let sum = numbers.reduce((prev, current) => prev + current);
  return sum / numbers.length;
};
console.log(avg([8, 2, 2, 4]));
console.log("-----------------------------------------------" + "\n");

//solve question 6 part2 (arrow function)
let reverse = (word) => {
  var chars = word.split(""),
    new_string = "";
  for (var i = chars.length - 1; i >= 0; i--) {
    new_string += chars[i];
  }

  return new_string;
};
console.log(reverse("caterpillar"));

console.log("-----------------------------------------------" + "\n");

//solve question 7  (Object)

function Movie(title, duration) {
  this.title = title;
  this.duration = duration;
  this.stars = [];

  this.moviestars = function (star) {
    this.stars.push(star);
  };

  this.info = function () {
    console.log(
      `${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars}`
    );
  };
}
movie = new Movie("Puff the Magic Dragon", "30");
movie.moviestars("Puff");
movie.moviestars("Jackie", "Living Sneezes");
movie.moviestars("Living Sneezes");
movie.info(movie);
