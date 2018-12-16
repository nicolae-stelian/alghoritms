'use strict';
/**
 * 
 * Can the vertices of a given graph be assigned
 * one of two colors in such a way that no edge connects vertices of the same color ?
 * which is equivalent to this question: Is the graph bipartite ?
 * 
 * detect TwoColors
 */
class TwoColors {
    
    constructor(graph) {
        this.graph = graph;
        this.resetMarked();
        this.resetColors();
        this.isTwoColorable = true;

        for (let v = 0; v < this.graph.totalVertices; v += 1) {
            if (this.marked[v] === false) {
                this.dfs(v);
            }
        }
    }

    isBipartide() {
        return this.isTwoColorable;
    }

    dfs(v) {
       this.marked[v] = true;
       
       for (let w of this.graph.adj(v)) {
           if (this.marked[w] === false) {
               this.marked[w] = true;
               this.colors[w] = ! this.colors[v];
               this.dfs(w);
           } else if (this.colors[w] == this.colors[v]) {
               this.isTwoColorable = false;
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

    resetColors() {
        // mark if vertex is visited 
        this.colors = [];
                
        // initialize marked with false for every vertex
        for (let i = 0; i < this.graph.totalVertices; i += 1) {
            this.colors[i] = false;
        }
    }
}

module.exports = TwoColors
