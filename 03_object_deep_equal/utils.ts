// deno-lint-ignore-file no-explicit-any
import { ObjectData } from "./types.ts"

export const isObject = (obj: ObjectData): boolean =>
  obj !== null && typeof obj === "object"

export const checkObjLength = (obj1: ObjectData, obj2: ObjectData): boolean => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  return keys1.length === keys2.length
}

export const checkArrLength = (arr1: Array<any>, arr2: Array<any>): boolean =>
  arr1.length === arr2.length

export const compareValues = (val1: any, val2: any): boolean => {
  const areObjects = isObject(val1) && isObject(val2)
  const areArrays = Array.isArray(val1) && Array.isArray(val2)

  if (
    (areObjects && !deepEqualObj(val1, val2)) ||
    (areArrays && !deepEqualArr(val1, val2)) ||
    (!areObjects && !areArrays && val1 !== val2)
  ) {
    return false
  }

  return true
}

export const deepEqualArr = (arr1: Array<any>, arr2: Array<any>): boolean => {
  if (!checkArrLength(arr1, arr2)) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i]
    const val2 = arr2[i]

    if (!compareValues(val1, val2)) {
      return false
    }
  }
  return true
}

export const deepEqualObj = (obj1: ObjectData, obj2: ObjectData): boolean => {
  if (!checkObjLength(obj1, obj2)) {
    return false
  }

  for (const key of Object.keys(obj1)) {
    const val1 = obj1[key]
    const val2 = obj2[key]

    if (!compareValues(val1, val2)) {
      return false
    }
  }
  return true
}
