/**
 * `: number` is type annotation
 * Declare variables of types number, string, boolean, null and undefined
 */
let apples: number = 5;

let seed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

/**
 * *********** Buit in Objects ***********
 */
let now: Date = new Date();

/**
 * *********** Array ***********
 */
let colors: string[] = ["Red", "Green", "Blue"];

let myNumbers: number[] = [1, 2, 3, 4, 5];

let truth: boolean[] = [true, false, true, true];

/**
 * *********** Classes ***********
 */
class Car {}

let carInst: Car = new Car();

/**
 * *********** Object literal ***********
 */

let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

/**
 * *********** Function ***********
 */

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/**
 * When to use annotations
 *
 * 1.) Function that returns the `any` type
 */
const jsonA = '{"x":10, "y":20}';
const coordinatesA = JSON.parse(jsonA);

// Fixing `any` type issue
const jsonB = '{"x":10, "y":20}';
const coordinatesB: { x: number; y: number } = JSON.parse(jsonB);
console.log("coordinatesB", coordinatesB);

/**
 * 2.) When we declare a variable on one line and initialize it later
 */
let words: string[] = ["red", "green", "blue"];
let foundWord: boolean;

for (let i: number = 0; i < words.length:number; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
