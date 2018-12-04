'use strict';

class DFS {
    
    constructor(graph) {
        this.graph = graph;
        this.resetMarked();
    }

    resetMarked() {
        // mark if vertex is visited 
        this.marked = [];
                
        // initialize marked with false for every vertex
        for (let i = 0; i < this.graph.totalVertices; i += 1) {
            this.marked[i] = false;
        }
    }

    /**
     * 
     * @param {int} source 
     */
    dfs(source) {
        // dfs 
        this.marked[source] = true;
        console.log("Visiting the vertex: " + source);
        for (let v of this.graph.adj(source)) {
            if (this.marked[v] === false) this.dfs(v);  
        }
    }

}

module.exports = DFS
