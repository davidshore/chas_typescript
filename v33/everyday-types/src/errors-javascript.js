////////////////////////////////////
// Fel i js som ger fel vid runtime
////////////////////////////////////

const message = "Hello World!";

message(); //Ger ett runtime error

console.log("hej");

function fn(x) {
  return x.flip();
}

fn("hej");

const announcement = "Hello World!";

// How quickly can you spot the typos?
console.log(announcement.toLocaleLowercase());
console.log(announcement.toLocalLowerCase());

// We probably meant to write this...
console.log(announcement.toLocaleLowerCase());

////////////////////////////////////////
// Fel i js som INTE ger fel vid runtime
////////////////////////////////////////

const user = {
  name: "Daniel",
  age: 26,
};
console.log(user.location); // returns undefined

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  //Operator '<' cannot be applied to types '() => number' and 'number'.
}
flipCoin();

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  //This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
