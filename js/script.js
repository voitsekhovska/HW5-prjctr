"use strict";

// Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};

for (let [keys, values] of Object.entries(priceData)) {
  let items = keys.toLowerCase().split();
  let prices = Number(values);
  let newArray = items.concat(prices.toFixed(2).split());
  console.log(newArray);
}

let updatedPriceData = Object.fromEntries(newArray);
console.log(updatedPriceData);
