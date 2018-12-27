'use strict';

let WeightedDigraph = require("./weighted/src/WeightedDigraph");

let Dijkstra = require("./weighted/src/Dijkstra");

////////// some test for priority queue, @todo move to another file 
// let IndexMinPq = require("./weighted/src/IndexMinPq");
// let edge = require("./weighted/src/WeightedEdge");
// let pq = new IndexMinPq();
// console.log('min priority queue tests');
// pq.insert(4, 4);
// pq.insert(7, 7);
// pq.insert(2, 2);
// pq.insert(3, 3);
// pq.insert(6, 6);
// pq.insert(5, 5);
// pq.insert(0, 0);
// pq.insert(1, 1);

// console.log(pq);
// pq.change(7, -1);
// console.log(pq);

// while(!pq.isEmpty()) {
//     let v = pq.delMin();
//     console.log(v);
//     console.log(" end del  min \n\n");
// }
// return;
////////// end test priority queue 


if (process.argv.length <= 2) {
    console.log("Usage: undirected.js graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

console.log('Reading from file. The graph is:');
let graph = WeightedDigraph.createFromFile(file);
// print the graph
console.log(graph.toString());

let source = 0;
let dijkstra = new Dijkstra(graph, 0);

// print distances:
console.log("Distances from 0: \n");
console.log(dijkstra.printDistances());



