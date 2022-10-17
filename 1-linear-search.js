// алгоритм линейного поиска элемента в массиве  - самый простой, те мы последовательно пробегаемся по элементу в цикле

const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

// кол-во итераций
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

// test
// console.log(linearSearch(arr, 8)); // 3 - ind
// console.log(count); // 4

console.log(linearSearch(arr, 888)); // null
console.log(count); // 11 - худший случай обхода всего массива  O(n)
