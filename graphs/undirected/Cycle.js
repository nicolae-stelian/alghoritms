'use strict';
/**
 * For every visited vertex ‘v’, if there is an adjacent ‘u’ such that u is already visited and u is not parent of v, 
 * then there is a cycle in graph. If we don’t find such an adjacent for any vertex, we say that there is no cycle.
 * 
 *  The assumption of this approach is that there are no parallel edges between any two vertices.
 * 
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

    dfs(v, parent) {
       this.marked[v] = true;
       
       for (let w of this.graph.adj(v)) {
           if (this.marked[w] === false) {
               this.marked[w] = true;
               this.dfs(w, v);
           } else if (parent != w) {
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
