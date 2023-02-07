function showSalary(users, age) {
  let str = ''
  users.map((user) => user).filter((element) => element.age <= age ? str += `${element.name}, ${element.balance}\n` : false )
  return str.slice(0,-1)
}

