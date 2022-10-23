// учитывается и количество пройденных участок и ДЛИННА пройденного ребра - ВЕС - суть - добраться до конечного пункта за кратчайший промежуток времени
// логика - за старт точку принимаем А за конечную G. Составляется таблица в котор на первом этапе записываются значения тех вершин в которые мы можем попасть из стартовой точки - все остальные вершины являются недостижимыми и мы их помечаем знаком бесконечность --- На втором этапе мы помечаем эти вершины как рассмотренные - На третьем этапе мы рассматриваем вершины которые мы можем попасть из точек B и С и в таблицу мы заносим значения от точки А до точек которые мы достигаем из вершин В и С (помечаем красным эти точки как рассмотренные) На след этапе мы достигаем точки G c перерасчетом и перезаписываем значение в таблицу - 5 этап заключительн с потимальным решением

// програмная реализация

const graph = {};

// создается объект в котором поля это вершины и каждое поле равняется объекту с расстоянием двух вершини

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  // табл с кратч путями
  const costs = {};
  // далее созд массив в котор мы будем добавл те узлы котор проверили уже
  const processed = [];
  // созд объект где будет хранить соседние вершины расматриваемого узла
  let neighbors = {};

  // заполняем тб и заполнить те вершины в которые мы можем добраться со старт точки значениями - а все остальные - бесконечно большим числом

  // получаем список ключей и итерируемся по ним
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000000;
    }
  });
  // console.log(costs);

  // след этап - нам нужно найти вершину в котор на данный момент мы можем попасть из точки А и путь в которую самый короткий
  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  // минимальн значен
  let lowestCost = 100000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPath(graph, 'a', 'g')); // { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 } - кратч путь
