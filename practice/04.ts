const doSimpleMath = (x: number, y: number, operation: string): number => {
  switch (operation) {
    case "add":
      return x + y

    case "subtract":
      return x - y

    case "multiply":
      return x * y

    case "divide":
      return x / y

    default:
      throw new Error("Please provide a proper mathematical operation!")
  }
}

console.log(doSimpleMath(4, 9, "add")) // 13
console.log(doSimpleMath(4, 9, "subtract")) // -5
console.log(doSimpleMath(4, 9, "multiply")) // 36
console.log(doSimpleMath(4, 9, "divide")) // 0.444...
console.log(doSimpleMath(4, 9, "something")) // error

// deno run 04.ts
