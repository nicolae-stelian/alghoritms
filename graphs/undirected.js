'use strict';

let Graph = require("./undirected/Graph");
let DFS = require("./undirected/Dfs");
let BFS = require("./undirected/Bfs");
let CC = require("./undirected/Cc");
let Cycle = require("./undirected/Cycle");
 
if (process.argv.length <= 2) {
    console.log("Usage: undirected.js graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

console.log('Reading from file. The graph is:');
let graph = Graph.createFromFile(file);
// print the graph to the console 
console.log(graph.toString());

// DFS
console.log('\nExecuting depth first search from source 0 ');
let src = 0;
let dfs =  new DFS(graph);
dfs.dfs(src);

console.log("The path from 0 to 6 is: " + dfs.pathTo(6));
console.log("The path from 0 to 3 is: " + dfs.pathTo(3));
console.log("The path from 0 to 7 is: " + dfs.pathTo(7));

// BFS 
console.log("\nExecuting breadth-first search from source 0");
src = 0;
let bfs =  new BFS(graph);
bfs.bfs(src);
console.log("The path from 0 to 6 is: " + dfs.pathTo(6));
console.log("The path from 0 to 3 is: " + dfs.pathTo(3));
console.log("The path from 0 to 7 is: " + dfs.pathTo(7));

// Conected Components with DFS
console.log("\nConnected compoenents");
let cc = new CC(graph);
console.log("Total components:" + cc.totalComponents());
console.log("Is connected 3 with 0: " + cc.isConnected(3, 0));
console.log("Is connected 3 with 8: " + cc.isConnected(3, 8));
console.log("Is connected 7 with 8: " + cc.isConnected(7, 8));

// Have graph cycle 
console.log("\n Detect cycle");
let cycle = new Cycle(graph);
console.log("Have graph cycle? " + cycle.haveCycle());
