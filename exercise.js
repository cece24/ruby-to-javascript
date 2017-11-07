var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

console.log("-----");

var materials = ["wood", "metal", "stone"];
var words = {
  "elephant": "The world's largest land mammal.",
  "school": "A place of learning.",
  "ice cream": "A delicious milk-based dessert."
}
console.log(materials)
console.log(words);

console.log("-----");

var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num === 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}

console.log("-----");

for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.");
}

console.log("-----");

var base = 5;
for (var i = 0; i < 20; i++) {
  console.log(i + base);
}

console.log("-----");

var total = 0;
for (var i = 0; i < 100; i++) {
  total += i
}
console.log(total);

console.log("-----");

for (var height = 3; height < 16; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

console.log("-----");

var containers = ["purse", "wallet", "backpack"];
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

console.log("-----");

function helloWorld() {
  console.log("Hello World!");
}

helloWorld()

console.log("-----");

function add(firstNum, secondNum) {
  return firstNum + secondNum
}

var amount = add(5, 7)
console.log(amount);
