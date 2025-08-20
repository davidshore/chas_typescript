// ARRAYS

// numbers[] är infered (uträknad av typescript)
const numbers = [1, 2, 3];

let numbers2: number[];

let numbers3: Array<number>;

// numbers2 = [1,2,"hej"] - får inte blanda värden

// FUNCTIONS

// Parameter type annotation
function greet2(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet2(42)

function getFavoriteNumber(): number {
  return 26;
}

async function getFavoriteNumber2(): Promise<number> {
  return 26;
}

async function myAsyncFunction() {
  const result = await getFavoriteNumber2();

  const result2 = getFavoriteNumber2();
}

//Anonymous Functions

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

//Optional Properties
// last är optional - den behöver inte finnas i objektet

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union Types

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");

// Error
// printId({ myID: 22342 });

function printId2(id: number | string) {
  if (typeof id == "string") {
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Type Aliases - Ge namn på en typ
type Point = { x: number; y: number };

// The parameter's type annotation is an object type
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 3, y: 7 });

// Ger namn på en union av två typer
type ID = number | string;

// Interfaces

interface Point2 {
  x: number;
  y: number;
}

function printCoord3(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord3({ x: 100, y: 100 });

// Type Assertions - När ts inte kan räkna ut typen så måste det ges med `as`

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const x = "hello" as string;

//Literal Types
type DiscountCode = "VIP" | "STUDENT";

function getDiscount(code: DiscountCode) {
  if (code == "VIP") {
    return 50;
  }
}

getDiscount("VIP");

let changingString = "Hello World";
changingString = "Olá Mundo";

const constantString = "Hello World";

let y: "hello" | "howdy" = "hello";
// OK
y = "hello";
// ...
y = "howdy";

//y = "hi"

type NUMBERS = -1 | 0 | 1 | 2;

let i: NUMBERS = 2;

function handleRequest(url: string, method: "GET" | "POST") {
  // do something
}

const req = { url: "https://example.com", method: "GET" as "GET" };

handleRequest(req.url, req.method);
