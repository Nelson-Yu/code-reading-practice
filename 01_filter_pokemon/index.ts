/**
 * Given some Pokemon JSON data filter out pokemon
 * that meet different criteria, provided to the function.
 *
 * Return an array of the filtered Pokemon but also add
 * a new property totalStats for each Pokemon.
 */

import data from "./data.json" assert { type: "json" }
import { Pokemon } from "./types.ts"
import { checkType, getTotalStats } from "./utils.ts"

const filterPokeByConditions = (
  pokeArr: Pokemon[],
  condition: (poke: Pokemon) => boolean
): Pokemon[] => {
  return pokeArr.reduce((acc: Pokemon[], curr: Pokemon) => {
    if (condition(curr)) {
      const currentPokemon: Pokemon = JSON.parse(JSON.stringify(curr))

      currentPokemon.totalStats = getTotalStats(
        Object.values(currentPokemon.stats)
      )

      return [...acc, currentPokemon]
    }

    return acc
  }, [])
}

const filteredPokemon = filterPokeByConditions(data.pokemon, (poke) =>
  checkType(poke.types, "normal")
)

console.log(filteredPokemon)

// deno run index.ts
