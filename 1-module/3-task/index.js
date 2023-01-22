function ucFirst(str) {
  let validStr = str.trim()
  if (validStr){
    return str[0].toUpperCase() + str.slice(1)
  } else return str
}
