export const useFirstLetter = (value: string | null): string | null => {
  return value ? value.slice(0, 1).toUpperCase() : null
}