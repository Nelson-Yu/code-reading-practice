const filterNames = (arr: string[], letter: string): string[] => {
  return arr.filter((name) =>
    name.toLowerCase().startsWith(letter.toLowerCase())
  )
}

console.log(
  filterNames(
    ["Nader", "Nelson", "Takako", "Kelsi", "Nikki", "Nick", "NC", "Somi"],
    "n"
  )
)

// deno run 02.ts
