function camelize(str) {
  return str
  .split('-')
  .map((letters, index) => index == 0 ? letters : letters[0].toUpperCase() + letters.slice(1))
  .join('')
}
