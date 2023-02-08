export const getTotalStats = (stats: number[]): number => {
  return stats.reduce((sum, stat) => sum + stat)
}

export const checkType = (types: string[], target: string): boolean => {
  return types.includes(target)
}
