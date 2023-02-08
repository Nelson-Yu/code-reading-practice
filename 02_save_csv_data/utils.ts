import { PokemonData } from "./types.ts"

export const pkmnToDto = (pokemon: PokemonData): PokemonData => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types,
    stats: pokemon.stats,
  }
}

export const fetchPokemonData = async (
  pokeArr: string[]
): Promise<PokemonData[]> => {
  try {
    const fetchPromises = pokeArr.map(
      async (name) => await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    )

    const pkmnResponses = await Promise.all(fetchPromises)
    const pkmnData = await Promise.all(pkmnResponses.map((res) => res.json()))

    return pkmnData.map((data) => pkmnToDto(data))
  } catch (_err) {
    throw new Error("Fetch Failed")
  }
}

export const formatDataToCSV = (data: PokemonData[]): Array<string[]> => {
  return data.map((pkmn) => [
    pkmn.id.toString(),
    pkmn.name,
    pkmn.height.toString(),
    pkmn.weight.toString(),
    pkmn.types[0].type.name.toString(),
    pkmn.types[1]?.type?.name.toString() || "n/a",
    pkmn.stats[0].base_stat.toString(),
    pkmn.stats[1].base_stat.toString(),
    pkmn.stats[2].base_stat.toString(),
    pkmn.stats[3].base_stat.toString(),
    pkmn.stats[4].base_stat.toString(),
    pkmn.stats[5].base_stat.toString(),
  ])
}
