export interface Pokemon {
  id: number
  name: string
  types: string[]
  totalStats?: number
  stats: {
    hp: number
    attack: number
    defense: number
    "special-attack": number
    "special-defense": number
    speed: number
  }
}
