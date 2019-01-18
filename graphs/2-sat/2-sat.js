
let Digraph = require("./src/Digraph");

let graph = Digraph.createFromFile('graphs/2-sat/input/input-0.txt');


console.log(graph.toString());
console.log("test");
console.log(graph.reverse().toString());