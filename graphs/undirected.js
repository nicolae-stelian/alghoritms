'use strict';

let Graph = require("./undirected/Graph");
let DFS = require("./undirected/Dfs");
 
if (process.argv.length <= 2) {
    console.log("Usage: undirected.js graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

console.log('Reading from file. The graph is:');
let graph = Graph.createFromFile(file);
// print the graph to the console 
console.log(graph.toString());

console.log('Executing dfs from source 0 ');
let src = 0;
let dfs =  new DFS(graph);
dfs.dfs(src);

console.log("The path from 0 to 6 is: " + dfs.pathTo(6));
console.log("The path from 0 to 3 is: " + dfs.pathTo(3));
console.log("The path from 0 to 7 is: " + dfs.pathTo(7));

