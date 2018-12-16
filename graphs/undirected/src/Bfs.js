'use strict';
/**
 * breadth-fist search
 */
class BFS {
    
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
    bfs(source) {
        // the array in javascript can be queue or stack 
        // for queue use function push and shift 
        // for stack use function push and pop
        // this case, we use queue 
        let queue = [];
        queue.push(source);
        this.marked[source] = true;
        console.log("push to queue " + source);

        // queue not empty 
        while (queue.length > 0) {
            let v = queue.shift();
            console.log("process " + v);
            for (let w of this.graph.adj(v)) {
                if (this.marked[w] === false) { // not visited
                    console.log("  push to queue " + w);
                    queue.push(w);
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                }
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

module.exports = BFS
