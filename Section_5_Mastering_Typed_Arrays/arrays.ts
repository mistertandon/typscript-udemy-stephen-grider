const logLineDivide = (): void => {
  console.log("\n======================================================\n");
};
/**
 * Why do care about typed array
 */
let carMakers: string[] = ["ford", "toyota", "çhevy"];
const dateArr: Date[] = [new Date(), new Date()];

const carsByManufracture: string[][] = [["f150"], ["corolla"], ["camaro"]];

/**
 * Reason 1: Help with inference when extracting values
 */
const carItem: string | undefined = carMakers.pop();
console.log("carItem ->", carItem);

/**
 * Reason 2: Prevent incompatible values
 *
 * carMakers.push(100); // This expression will cause error
 */

/**
 * Reason 3: Help with map
 */
const carMakersMod: string[] = carMakers.map((companyName: string): string => {
  return companyName.toLocaleUpperCase();
});
logLineDivide();

/**
 * How to define flexible types
 */
const importantDates: (Date | string)[] = [new Date(), "parvesh"];
importantDates.push(new Date());
importantDates.push("Tandon");
// importantDates.push(18100000); // This will cause an error
console.log("importantDates : ", importantDates);
logLineDivide();
