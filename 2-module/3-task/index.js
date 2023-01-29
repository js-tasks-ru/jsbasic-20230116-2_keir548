let calculator = {
  read,
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
};
function read (a,b) {
  calculator.a = a
  calculator.b = b
}
calculator.read(5, 3)
calculator.sum()
calculator.mul()

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
