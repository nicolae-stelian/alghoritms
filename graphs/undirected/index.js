'use strict';

let Graph = require("./graph");
 
if (process.argv.length <= 2) {
    console.log("Usage: index.js file_with_the_graph.txt ");
    process.exit(-1);
}

let file = process.argv[2];

let graph = Graph.createFromFile(file);
console.log(graph.toString());
