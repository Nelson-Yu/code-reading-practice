/**
 * Given a list of pokemon names in an array,
 * fetch the data from PokeAPI and then format and
 * write the data into the a csv file
 */

import { writeCSV } from "https://deno.land/x/csv@v0.8.0/mod.ts"
import { fetchPokemonData, formatDataToCSV } from "./utils.ts"

const pokemon = [
  "venusaur",
  "charizard",
  "blastoise",
  "raichu",
  "mewtwo",
  "dragonite",
  "arbok",
]

const pokemonData = await fetchPokemonData(pokemon)

const f = await Deno.open("./pokemon.csv", {
  write: true,
  create: true,
  truncate: true,
})
const rows = [
  [
    "id",
    "name",
    "height",
    "weight",
    "type",
    "2nd type",
    "hp",
    "atk",
    "def",
    "sp-at",
    "sp-def",
    "spd",
  ],
  ...formatDataToCSV(pokemonData),
]

await writeCSV(f, rows)

f.close()

// deno run --allow-net --allow-write index.ts
