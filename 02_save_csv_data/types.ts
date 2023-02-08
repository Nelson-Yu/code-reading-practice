export interface PokemonData {
  id: number
  name: string
  weight: number
  height: number
  stats: PokemonStat[]
  types: PokemonType[]
}

export interface PokemonStat {
  base_stat: number
  stat: {
    name: string
  }
}

export interface PokemonType {
  type: {
    name: string
  }
}
