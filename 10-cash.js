// алгоритмы кеширования данных во избежания повторных вычислений какой-либо функции

// созд функцию которая будет кешировать в нутри себя результат выполнения какой-то другой функции

function cashFunction(fn) {
  // созд объект который хранит по ключу результаты кеширования
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log('взято из кеша', cash[n]);
      return cash[n];
    }
    let result = fn(n);
    console.log('посчитала функция', result);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
}

console.log(factorial(6)); // 720

// созд фнкц которая будет кешировать факториал
const cashFactorial = cashFunction(factorial);
cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);
// // посчитала функция 24
// посчитала функция 6
// взято из кеша 24
// взято из кеша 120
// посчитала функция 1
