
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
            let v = this.queue[0];
            console.log("queue content: ", this.queue);
            // remove first element 
            this.queue.splice(0, 1);
            this.onQ[v] = false;
            this.relax(v);
        }
    }

    relax(v) {
        console.log("relax ", v);
        console.log("cost:", this.cost);
        for (let e of this.graph.adj(v)) {
            let w = e.to();
            console.log("process ", w);

            if (this.distTo[v] == undefined) this.distTo[v] = Number.MAX_SAFE_INTEGER;
            if (this.distTo[w] == undefined) this.distTo[w] = Number.MAX_SAFE_INTEGER;

            if (this.distTo[w] > this.distTo[v] + e.weight) {
                this.distTo[w] = this.distTo[v] + e.weight;
                this.edgeTo[w] = e;
                
                if (this.onQ[w] == false || this.onQ[w] == undefined) {
                    this.queue.push(w);
                    this.onQ[w] = true;
                }
            }
            this.cost += 1;    
            console.log("cycle cond", this.cost, this.graph.totalVertices);
            if (this.cost % this.graph.totalVertices == 0) {
                this.hasNegativeCycle = true;
            }
        }
    }

    printDistances() {
    }
    
}

module.exports = BellmanFord