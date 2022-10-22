// алгоритм бинарного поиска - те в первую очередь нам нужно получить центральный элемент в массиве (упорядоченных чисел), мы должны знать позицию первого элемента и последнего

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

// алгоритм можно реализовать как с помощью рекурсии так и цикла
// цикл
function binarnySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false; // флаг - нашли мы элеmeнт в массиве или нет
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2); // 8

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
// console.log(binarnySearch(array, 4)); // 4
// console.log(count); // 4ку находим за 4 итерации и макс кол-во итераци за которое можно найти любое число в данном  массиве

console.log(binarnySearch(array, 8)); // 8
console.log(count); // 1

// сложность (o)lg(n)2  lg от 16 по основанию 2 = 4

// сделаем при помощи рекурсии
function recursiveBinarySearch(array, item, start, end) {
  // находим центральный элемент
  let middle = Math.floor((start + end) / 2);
  count += 1;

  // делаем проверку
  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 12, 0, array.length)); //12
console.log(count); //3
