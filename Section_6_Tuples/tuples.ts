/**
 * Array-like structure where each element represents some property of record
 */

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

let pepsi: [string, boolean, number] = ["brown", true, 40];

/**
 * pepsi[0] = 40 will generate an error as first element must be of  String
 */

/**
 * Solution to above problem
 */
type Drink = [string, boolean, number];
const sprite: Drink = ["brown", false, 0];

/**
 * Still we do have limitation as original labels are missing.
 *
 * Below is another example
 */

// Below expression doesn't make sens the meaning of 400 and 3354
const carSpecs: [number, number] = [400, 3354];

// Below statement makes sense
const carStats = {
  horsePower: 400,
  weight: 3354,
};
