const message = "Hello World!";

// message();

// x behöver vara denna typ av objekt:

const myVar = {
  flip: () => {},
};

interface MyType {
  flip: () => void;
}

function myFunc(x: MyType) {
  return x.flip();
}

const user = {
  name: "Daniel",
  age: 26,
};
console.log(user.location);

const announcement = "Hello World!";

// How quickly can you spot the typos?
console.log(announcement.toLocaleLowercase());
console.log(announcement.toLocalLowerCase());

// We probably meant to write this...
console.log(announcement.toLocaleLowerCase());

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  //Operator '<' cannot be applied to types '() => number' and 'number'.
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  //This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
