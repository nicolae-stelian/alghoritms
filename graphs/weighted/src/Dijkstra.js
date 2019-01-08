
'use strict';

let IndexMinPq = require('./IndexMinPq');

class Dijkstra {
    constructor(graph, s) {
        this.edgeTo = [];
        this.distTo = [];
        this.graph = graph;

        this.pq = new IndexMinPq();

        this.distTo[s] = 0.0;

        this.pq.insert(s, 0.0);
        
        while (!this.pq.isEmpty()) {
            this.relax(this.pq.delMin())
        }
    }

    relax(v) {
        for (let e of this.graph.adj(v)) {
            let w = e.to();
            if (this.distTo[v] == undefined) this.distTo[v] = Number.MAX_SAFE_INTEGER;
            if (this.distTo[w] == undefined) this.distTo[w] = Number.MAX_SAFE_INTEGER;

            
            if (this.distTo[w] > this.distTo[v] + e.weight) {
                this.distTo[w] = this.distTo[v] + e.weight;
                this.edgeTo[w] = e;
                if (this.pq.contains(w)) {
                    this.pq.change(w, this.distTo[w]);
                } else {
                    this.pq.insert(w, this.distTo[w]);
                }
            }
        }
    }

    printDistances() {
        let s = "";
        for (let key in this.distTo) {
            s += `dist to ${key}: ${this.distTo[key]} \n` ;
        }
        return s;
    }
    
}

module.exports = Dijkstra;