
'use strict';

class BellmanFord {
    constructor(graph, s) {
        this.edgeTo = [];
        this.distTo = [];
        this.onQ = [];
        this.queue = [];
        this.graph = graph;
        this.cost = 0; // number of calls to relax()
        this.hasNegativeCycle = false;

        this.distTo[s] = 0.0;
        this.queue.push(s);
        this.onQ[s] = true;
        
        while (this.queue.length > 0 && !this.hasNegativeCycle) {
            this.cost += 1;
            let v = this.queue[0];
            // remove first element 
            this.queue.splice(0, 1);
            this.onQ[v] = false;
            this.relax(v);
            console.log("end relax ", v);
        }
        console.log("end");
    }

    relax(v) {
        for (let e of this.graph.adj(v)) {
            let w = e.to();

            if (this.distTo[v] === undefined) this.distTo[v] = Number.MAX_SAFE_INTEGER;
            if (this.distTo[w] === undefined) this.distTo[w] = Number.MAX_SAFE_INTEGER;

            if (this.distTo[w] > this.distTo[v] + e.weight) {
                this.distTo[w] = this.distTo[v] + e.weight;
                this.edgeTo[w] = e;

                if (this.onQ[w] === false || this.onQ[w] === undefined) {
                    this.queue.push(w);
                    this.onQ[w] = true;
                }
            }


            if (this.cost % (this.graph.totalVertices + 1) === 0) {
                this.hasNegativeCycle = true;
            }
        }
    }

    printDistances() {
    }
    
}

module.exports = BellmanFord