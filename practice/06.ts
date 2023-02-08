const filterCondition = (
  arr: number[],
  cb: (n: number) => boolean
): number[] => {
  return arr.filter((num) => cb(num))
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filterCondition(numArr, (n) => n % 2 === 0))
console.log(filterCondition(numArr, (n) => n % 2 === 1))
console.log(filterCondition(numArr, (n) => n % 5 === 0 && n % 2 === 0))

// deno run 06.ts
