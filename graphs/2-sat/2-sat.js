
let Digraph = require("./src/Digraph");

console.log("start");
console.log("create graph");
let graph = Digraph.createFromFile(__dirname + '/input/2sat2.txt');

console.log("create graph transpose");
let transpose = graph.reverse();

let stack = [];
let visited = [];
console.log("calculate transpose stack");
for (let v of transpose.getVertices()) {
    if (!visited[v]) {
        transpose.dfs(v, visited, stack);
    }
}

console.log("calculate union find");

visited = [];
let uf = new Map();
for (let i = stack.length - 1; i >= 0; i--) {
    let v = stack[i];

    if (!visited[v]) {
        let leader = v;
        let tStack = [];
        graph.dfs(v, visited, tStack);
        for(let w of tStack) {
            uf.set(w, leader);
        }
    }
}

for (let i = 0; i < graph.vertices.length; i += 1) {
    let v = graph.vertices[i];
    if (uf.has(v) && uf.has(-v)) {
        if (uf.get(v) === uf.get(-v)) {
            console.log("false");
            return;
        }
    }
}
console.log("true");



// console.log("test");
// console.log(graph.reverse().toString());