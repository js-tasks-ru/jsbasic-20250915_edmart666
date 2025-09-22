let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return (
      Number.isFinite(this.a) && Number.isFinite(this.b) && this.a + this.b
    );
  },
  mul() {
    return (
      Number.isFinite(this.a) && Number.isFinite(this.b) && this.a * this.b
    );
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
