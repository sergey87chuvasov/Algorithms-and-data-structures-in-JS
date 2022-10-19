// сортировка выбором - есть массив неупорядоченных элементов - мы в цикле находим минимальный элемент, затем меняем местами с первым элементов, затем снова пробегаемся по массиву находим минимальный и меняем со вторым элементом в массиве итд - пока не будет отсортирован массив

const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [0,1,1,2,3...]
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    // замена двух элементов местами
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr)); // [-5,]
console.log(arr.length); //26
console.log(count); // 325

// сложность o(n*2)
