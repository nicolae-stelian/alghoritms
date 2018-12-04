'use strict';

let Graph = require("./Graph");
let DFS = require("./Dfs");
 
if (process.argv.length <= 2) {
    console.log("Usage: index.js file_with_the_graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

console.log('Reading from file .. ');
let graph = Graph.createFromFile(file);
// print the graph to the console 
console.log(graph.toString());

console.log('Executing dfs .. ');
let dfs =  new DFS(graph);
dfs.dfs(0);
