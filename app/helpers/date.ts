export function getYear(date: string): number {
  const year = new Date(date).getFullYear()
  return isNaN(year) ? 0 : year
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('tr-TR', options)
}
