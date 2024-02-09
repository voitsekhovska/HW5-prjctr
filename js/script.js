"use strict";

// Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};

let updatedPriceData = {};

for (let [keys, values] of Object.entries(priceData)) {
  let items = keys.toLowerCase();
  let prices = Number(values);
  let roundedPrices = prices.toFixed(2);
  updatedPriceData[items] = roundedPrices;
}

console.log(updatedPriceData);
