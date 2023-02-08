/**
 * Given two objects/arrays, check if the two objects
 * are equal to each other. T
 *
 * Possible values in the object include:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null
 * - objects
 * - arrays
 *
 */

import { deepEqualObj } from "./utils.ts"

const testObj1 = {
  name: "Bob",
  isSingle: true,
  measurements: {
    height: 175,
    weight: 70,
  },
  favFood: {
    breakfast: {
      eggs: "scrambled",
      meat: "bacon",
    },
    lunch: "ramen",
    dinner: {
      entree: "steak",
      dessert: "ice cream",
    },
  },
  favLanguages: ["English", "French", "Japanese"],
  favPokemon: [
    { name: "Snorlax", id: 143 },
    { name: "Mew", id: 151 },
  ],
}

const testObj2 = {
  name: "Bob",
  isSingle: true,
  measurements: {
    height: 175,
    weight: 70,
  },
  favFood: {
    breakfast: {
      eggs: "scrambled",
      meat: "bacon",
    },
    lunch: "ramen",
    dinner: {
      entree: "steak",
      dessert: "ice cream",
    },
  },
  favLanguages: ["English", "French", "Japanese"],
  favPokemon: [
    { name: "Snorlax", id: 143 },
    { name: "Mew", id: 151 },
  ],
}

console.log(deepEqualObj(testObj1, testObj2))

// deno run index.ts
