interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: "Civic",
  year: 2020,
  broken: true,
  summary(): string {
    return `Vehicle Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Vehicle Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}\nIs Broken: ${vehicle.broken}
  `);
};

printVehicle(oldCivic);
