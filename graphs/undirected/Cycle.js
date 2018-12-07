'use strict';
/**
 * detect Cycle
 */
class Cycle {
    
    constructor(graph) {
        this.graph = graph;
        this.resetMarked();
        this.hasCycle = false;

        for (let v = 0; v < this.graph.totalVertices; v += 1) {
            if (this.marked[v] === false) {
                this.dfs(v, v);
            }
        }
    }

    haveCycle() {
        return this.hasCycle;
    }

    dfs(v, u) {
       for (let w of this.graph.adj(v)) {
           if (this.marked[w] === false) {
               this.marked[w] = true;
               this.dfs(w, v);
           } else if(w != u) {
                this.hasCycle = true;
           }
       }
    }

    resetMarked() {
        // mark if vertex is visited 
        this.marked = [];
                
        // initialize marked with false for every vertex
        for (let i = 0; i < this.graph.totalVertices; i += 1) {
            this.marked[i] = false;
        }
    }
}

module.exports = Cycle
