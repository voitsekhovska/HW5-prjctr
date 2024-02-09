"use strict";

// Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};

let updatedPriceData = {};

for (let [key, value] of Object.entries(priceData)) {
  let item = key.toLowerCase();
  let price = Number(value).toFixed(2);
  updatedPriceData[item] = price;
}

// for (let key in priceData) {
//   let item = key.toLowerCase();
//   let price = Number(priceData[key]).toFixed(2)
//   updatedPriceData[item] = price;
// }
console.log(updatedPriceData);
