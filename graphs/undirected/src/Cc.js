'use strict';
/**
 * conected components (similar with union-find but use dfs to detect connections)
 */
class CC {
    
    constructor(graph) {
        this.graph = graph;
        this.total = 0;
        this.resetMarked();
        this.resetId();
        
        for(let v = 0; v < this.graph.totalVertices; v++) {
            if (this.marked[v] === false) {
                console.log("Component from " + v);
                this.dfs(v);
                this.total += 1;
            }
        }
    }

    isConnected(v, w) {
        return this.id[v] == this.id[w];
    }

    totalComponents() {
        return this.total;
    }

    dfs(v) {
       for (let w of this.graph.adj(v)) {
           if (this.marked[w] === false) {
               this.marked[w] = true;
               this.id[w] = this.total;
               this.dfs(w);
           }
       }
    }

   resetId() {
       this.id = [];
       // initialize marked with false for every vertex
       for (let i = 0; i < this.graph.totalVertices; i += 1) {
           this.id[i] = i;
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

module.exports = CC
