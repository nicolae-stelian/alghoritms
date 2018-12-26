'use strict';


let WeightedDigraph = require("./weighted/src/WeightedDigraph");
let IndexMinPq = require("./weighted/src/IndexMinPq");
 let edge = require("./weighted/src/WeightedEdge");

let pq = new IndexMinPq();
console.log('min priority queue tests');

pq.insert(new edge(4, 4, 2.3), 4);
pq.insert(new edge(7, 7, 1.3), 7);
pq.insert(new edge(2, 2, 5.1), 2);
pq.insert(new edge(3, 6, 3.3), 3);
pq.insert(new edge(6, 6, 2.3), 6);
pq.insert(new edge(5, 6, 2.3), 5);
pq.insert(new edge(0, 5, 4.1), 0);
pq.insert(new edge(1, 5, 4.1), 1);

console.log(pq);

while(!pq.isEmpty()) {
    let v = pq.delMin();
    console.log(v);
    console.log("\n\n");
}
console.log(pq);


return;


if (process.argv.length <= 2) {
    console.log("Usage: undirected.js graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

console.log('Reading from file. The graph is:');
let graph = WeightedDigraph.createFromFile(file);

// let graph = Graph.createFromFile(file);
// print the graph to the console 
console.log(graph.toString());


