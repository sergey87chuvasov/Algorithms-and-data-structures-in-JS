// set (множество - массив который хранит только уникальные значения) i map (хранит в себе пары ключ - значение) - структуры данных которые по дефолту уже реализованы в js

const map = new Map();
const objKey = { id: 5 };
// map.set('name', 'Serge');
// console.log(map.get('name')); // Serge

map.set(objKey, 'Serge');
console.log(map.get(objKey)); // Serge

const set = new Set();
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(3);
set.add(4);

console.log(set); // Set(3) { 5, 3, 4 }
