export function getYear(date: string): number {
  const year = new Date(date).getFullYear()
  return isNaN(year) ? 0 : year
}

export function formatDate(date: string): string {
  if (date.length === 17) {
    // ay ve yıl
    return new Date(date).toLocaleDateString('tr-TR', {
      month: 'long',
      year: 'numeric',
    })
  } else if (date.length === 14) {
    // sadece yıl
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
    })
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(date).toLocaleDateString('tr-TR', options)
  }
}
