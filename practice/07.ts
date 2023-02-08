const findMidPoint = (x: number, y: number): number => Math.floor((x + y) / 2)

const creatMidPointMap = (arr: Array<number[]>): Map<number[], number> => {
  const cache = new Map()

  for (const item of arr) {
    cache.set(item, findMidPoint(item[0], item[1]))
  }

  return cache
}

const example = [
  [1, 5],
  [1, 10],
  [5, 99],
  [100, 50],
]

console.log(creatMidPointMap(example))

// deno run 07.ts
