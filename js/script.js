"use strict";

// Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};
console.log(priceData);

let keys = Object.keys(priceData).join().toLowerCase().split(",");
console.log(keys);

let values = Object.values(priceData);
for (let value of values) {
  console.log(parseFloat(value).toFixed(2).split(","));
}

let updatedPriceData = Object.fromEntries(priceData);
console.log(updatedPriceData);
