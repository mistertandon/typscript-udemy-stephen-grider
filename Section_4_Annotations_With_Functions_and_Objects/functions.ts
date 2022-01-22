/**
 * One way to define Function annotation
 */
const addFunA: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

/**
 * Other way to define Function annotation
 */
const addFunB = (a: number, b: number): number => {
  return a + b;
};

/**
 * When we don't define return type, Typescript infere VOID type
 * Defined `genFunction` annotation would be same as below
 *
 * const genFunction = (a: number, b: number) => void { };
 */
const genFunction = (a: number, b: number) => {};

/**
 * will always see nearly identical
 */
function divide(dividend: number, divisor: number): number {
  return dividend / divisor;
}

const multiply = function (multiplier: number, multiplicand: number): number {
  return multiplier * multiplicand;
};

const logger = (message: string): void => {
  console.log(message);
};

interface Weather {
  date: Date;
  weather: string;
}
const todaysWeather: Weather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({ date, weather }: Weather) => {
  console.log(`
    Today's date: ${date} and weather ${weather}
    `);
};
logWeather(todaysWeather);
