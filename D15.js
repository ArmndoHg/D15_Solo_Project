console.log("\n------------------------ EXERCISE 21 ------------------------");

let x = "Jhon";
let y = "Doe";

console.log(x, y);

console.log("\n------------------------ EXERCISE 22 ------------------------");

const me = {
  name: "Armando",
  surname: "Hernandez",
  email: "armando@gmail.com",
};

console.log(me);

console.log("\n------------------------ EXERCISE 23 ------------------------");

delete me.email;

console.log(me);

console.log(
  "\n------------------------ EXERCISE 24 - 25 ------------------------"
);

const array = [
  "mouse",
  "dog",
  "rat",
  "bear",
  "cat",
  "fox",
  "hippo",
  "camel",
  "tiger",
  "leon",
];

console.log(array);

console.log("\n------------------------ EXERCISE 26 ------------------------");

const randomArray = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(randomArray);

console.log("\n------------------------ EXERCISE 27 ------------------------");

function myMax(randomArray) {
  let al = randomArray.length;
  maximum = randomArray[al - 1];
  while (al--) {
    if (randomArray[al] > maximum) {
      maximum = randomArray[al];
    }
  }
  return maximum;
}

function myMin(randomArray) {
  let al = randomArray.length;
  minimo = randomArray[al - 1];
  while (al--) {
    if (randomArray[al] < minimo) {
      minimo = randomArray[al];
    }
  }
  return minimo;
}

const max = myMax(randomArray);
const min = myMin(randomArray);

console.log(max);
console.log(min);
console.log("\n------------------------ EXERCISE 28 ------------------------");

const firstArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10)
);
console.log(randomArray);

console.log();


console.log("\n------------------------ EXERCISE 31 ------------------------");

const getContainer = document.getElementById("container");

console.log("\n------------------------ EXERCISE 32 ------------------------");

const getTd = document.querySelectorAll("td");

console.log("\n------------------------ EXERCISE 33 ------------------------");

for (let i = 0; i < getId.length; i++) {
  const tdElement = getId[i].innerText;
  console.log(tdElement)
}

