'use strict';


let WeightedDigraph = require("./weighted/src/WeightedDigraph");
 
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


