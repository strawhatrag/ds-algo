class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentLists = {};
  }

  addVertex(node) {
    if (!this.adjacentLists[node]) {
      this.adjacentLists[node] = [];
    }
  }

  addEdge(node1, node2) {
    this.adjacentLists[node1].push(node2);
    this.adjacentLists[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentLists);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentLists[node];
      let connections = "";
      let vertex;

      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

console.log(myGraph.adjacentLists);

myGraph.showConnections();
