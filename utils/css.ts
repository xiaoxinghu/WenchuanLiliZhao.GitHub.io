export const px = (n: number | string) => (typeof n === 'number' ? n + 'px' : n)

export const mergeClasses = (...all: (string | undefined)[]) => {
  return all.filter(Boolean).join(' ')
}
