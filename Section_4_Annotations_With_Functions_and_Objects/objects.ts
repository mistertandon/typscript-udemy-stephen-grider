const profile = {
  name: "parvesh",
  age: 30,
  coords: {
    latitude: 20,
    langitude: 24,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  coords: { langitude, latitude },
}: { age: number; coords: { langitude: number; latitude: number } } = profile;
