// связанный список - каждый отдельно взятый элемент списка занимает отдельное место в памяти - связанность происходит по принципу что каждый предыдущий элемент хранит ссылку на следующий элемент в списке +++ мы можем мгновенно добавлять элементы в конец или начало списка

// реализуем класс связанного списка

class LinkedList {
  constructor() {
    // размер самого списка
    this.size = 0;
    this.root = null;
  }

  // реализ функц для добавления в список значений
  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }
  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

// класс конкретно взятого узла
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print(); // [ 5, 3, 2, 5, 7 ]
