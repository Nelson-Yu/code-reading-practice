type InputValue = string | number
type ResultType = "string" | "number"

const addValues = (
  val1: InputValue,
  val2: InputValue,
  resultType: ResultType
): InputValue => {
  if (resultType === "string") {
    return val1.toString() + val2.toString()
  }

  return +val1 + +val2
}

console.log(addValues("5", 5, "number")) // 10
console.log(addValues("5", 5, "string")) // 55

console.log(addValues("1", "1", "number")) // 2
console.log(addValues("1", "1", "string")) // 11

console.log(addValues(3, 3, "number")) // 6
console.log(addValues(3, 3, "string")) // 33

// deno run 01.ts
