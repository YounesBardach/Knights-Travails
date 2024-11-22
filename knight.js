//build a function knightMoves that shows the shortest possible way to get from one square to another
//by outputting all squares the knight will stop on along the way.
//We use a graph, represented as an adjacent list to represent the chess board
//Link with information about graphs:
//https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs
//https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs

function buildAdjacencyList() {
  //knight moves:
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const adjacencyList = {};

  // Generate all valid moves for every square on the board
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const key = `${x},${y}`;
      adjacencyList[key] = [];
      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
          adjacencyList[key].push(`${nx},${ny}`);
        }
      }
    }
  }
  return adjacencyList;
}

function knightMoves(start, end) {
  const adjacencyList = buildAdjacencyList();

  // BFS to find the shortest path
  function bfs(start, end) {
    //initial square:
    const queue = [[start]];
    //track visited squares:
    const visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
      //dequeue first path
      const path = queue.shift();
      //check current square
      const current = path[path.length - 1];
      //return path if we reach goal square
      if (current === end) {
        return path;
      }
      //for each neighbor of current square, if not visited, mark as visited and
      //
      for (const neighbor of adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
  }

  // Convert start and end to string keys for adjacency list
  const startKey = start.join(",");
  const endKey = end.join(",");

  const path = bfs(startKey, endKey);

  // Output the result
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  const result = path.map((pos) => pos.split(",").map(Number));
  result.forEach((step) => console.log(step));
  return result;
}

// Example usage
knightMoves([0, 0], [3, 3]);
