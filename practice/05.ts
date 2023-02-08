const arrDifference = (arr1: number[], arr2: number[]): number[] => {
  const cache = new Set(arr1)
  const result = arr2.filter((num) => {
    if (!cache.has(num)) {
      return num
    }
  })

  if (result.length === arr2.length) {
    return arr1.concat(arr2)
  }

  return result
}

console.log(arrDifference([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])) // [ 7, 9 ]
console.log(arrDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])) // []
console.log(arrDifference([2, 4, 6, 8, 10], [1, 3, 5, 7, 9])) // [ 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// deno run 05.ts
