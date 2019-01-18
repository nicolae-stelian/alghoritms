
let Digraph = require("./src/Digraph");

let graph = Digraph.createFromFile('graphs/2-sat/input/input-0.txt');
let transpose = graph.reverse();

let stack = [];
let visited = [];

for (let v of transpose.getVertices()) {
    if (!visited[v]) {
        console.log("starting", v);
        transpose.dfs(v, visited, stack);
    }
}



// console.log("uniion find");

visited = [];
let uf = [];

for (let i = stack.length - 1; i >= 0; i--) {
    let v = stack[i];

    if (!visited[v]) {
        let tStack = [];
        graph.dfs(v, visited, tStack);

        console.log("the same sccs: " + v);
        for(let w of tStack) {
            console.log(w);
            uf[w] = v
        }
    }
}

console.log("uf");
uf.forEach(function(k, v) { console.log(k, v);});




// console.log("test");
// console.log(graph.reverse().toString());