interface Reportable {
  name: string;
  year: number;
  summary(): string;
}

const vehicleCivic: Reportable = {
  name: "Civic",
  year: 2020,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink: Reportable = {
  name: "Coke",
  year: 2021,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Product summary: `, item.summary());
};

printSummary(vehicleCivic);
printSummary(drink);
