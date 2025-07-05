export function getYear(date: string): number {
  const year = new Date(date).getFullYear()
  return isNaN(year) ? 0 : year
}
