// алгоритмы которые связаны с обходом дерева. Деревья это рекурсивная структура данных, где каждый узел является так же деревом, но для данного дерева каждый узел является поддеревом

// Задача см фото: есть дерево, надо обойти каждый узел и посчитать сумму значений который хранит каждый из этих узлов

// v - значение узла в поле value
// c - его дети child
const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

// обойти дерево можно с помощью рекурсии и цикла

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;
    // условие  выхода из рекурсии
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });

  return sum;
};

// итеративный подход
const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  let stack = [];
  tree.forEach((node) => stack.push(node));
  // пока стек не пустой
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
};

console.log(recursive(tree)); // 69

console.log(iteration(tree)); // 69
