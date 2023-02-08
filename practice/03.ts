const pokemonExists = async (name: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (response.status === 200) {
      return true
    }
  } catch (_err) {
    return false
  }

  return false
}

console.log(await pokemonExists("ditto")) // true
console.log(await pokemonExists("pikachu")) // true
console.log(await pokemonExists("bob")) // false

// deno run --allow-net 03.ts
