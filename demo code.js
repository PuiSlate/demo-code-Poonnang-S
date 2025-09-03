function filterCarsByMakeAndYear(cars, make, targetYear) {
return cars.filter(car => car.make === make && car.year > targetYear); 
}

let cars = [
   { make: "Toyota", model: "Camry", year: 2015 },
   { make: "Honda", model: "Civic", year: 2018 },
   { make: "Ford", model: "Escape", year: 2020 },
   { make: "Nissan", model: "Rogue", year: 2019 },
   { make: "Tesla", model: "Model 3", year: 2023 },
   { make: "Ford", model: "Cmax Hybrid", year: 2016},
   { make: "Ford", model: "Flex", year: 2019}
];

console.log(filterCarsByMakeAndYear(cars, "Ford", 2016));

if (!Array.isArray(cars)) {
    throw new Error("cars must be an array");
  }
  if (typeof make !== "string") {
    throw new Error("make must be a string");
  }
  if (typeof targetYear !== "number") {
    throw new Error("targetYear must be a number");
  }