function highlight(table) {
  let tr = table.rows
  for (let i = 0; i < tr.length; i++){
    console.log(tr)
    console.log(tr.map(user => user))
    // let at = tr[i].querySelector('[data-available]')
    // let gender = tr[i].cells[2].textContent
    // let age = tr[i].cells[1]
    // datacheck(at, tr[i])
    // maleFemale(gender, tr[i])
    // checkage(age, tr[i])
  // }
// }
// /**
//  * Проверка дата атрибута
//  * @param {elem} элемент который проверяем 
//  * @param {tr} элемент которому присваиваем необходимый дата атрибут
//  */
// function datacheck (elem, tr){
  // if(!isNaN(elem)){
    // tr.hidden = true
  // } else if(elem.dataset.available == 'true') {
    // tr.classList.add('available')
  // } else if (elem.dataset.available == 'false') {
    // tr.classList.add('unavailable')
  // } 
// }
// /**
//  * Проверка половой принадлежности
//  * @param {gender}  Из ячейки таблици принимаем m или f
//  * @param {tr } Элемент, которому присваиваем необходимый класс
//  */
// function maleFemale (gender, tr){
  // if(gender === 'm') {
    // tr.classList.add('male')
  // } else if(gender === 'f') {
    // tr.classList.add('female')
  // } 
// }
// /**
//  * Проверка половой принадлежности
//  * @param {age}  Из ячейки таблици принимаем значение возраста и приобразуем его в число
//  * @param {tr} Элемент, которому присваиваем инлайн-стиль
//  */
// function checkage (age, tr){
  // if (+age.textContent < 18){
    // tr.style.textDecoration = 'line-through'
  // }
}
}