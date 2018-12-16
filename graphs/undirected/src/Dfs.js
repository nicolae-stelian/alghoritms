'use strict';
/**
 * Depth first search 
 */
class DFS {
    
    constructor(graph) {
        this.graph = graph;
        this.resetMarked();
        this.resetEdgeTo();
    }

    resetEdgeTo() {
        // used to reconstruct the path from the source 
        this.edgeTo = [];
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
     * Use indentation for nice printing the recursion
     * @param {int} source 
     * * @param {string} indentation
     */
    dfs(source, indentation) {
        if (!indentation) { 
            indentation = '';        
        }
        
        console.log(indentation + "visit: " + source);
        indentation += "  ";

        // dfs 
        this.marked[source] = true;
        for (let v of this.graph.adj(source)) {
            if (this.marked[v] === false) {
                this.edgeTo[v] = source;
                this.dfs(v, indentation);  
            } else {
                // back edge, cycle
            }
        }
    }

    pathTo(dst) {
        // no path exist if is not marked
        if (!this.marked[dst]) return false;
        let path = dst;
        while (this.edgeTo[dst] != undefined) {
            path += ' ' + this.edgeTo[dst];
            dst = this.edgeTo[dst];
        }
        return path;
    }
}

module.exports = DFS
