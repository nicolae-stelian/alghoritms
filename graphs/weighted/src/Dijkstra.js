
'use strict';

class Dijstra {
    constructor(graph, s) {
        this.edgeTo = [];
        this.distTo = [];

        this.pq = new IndexMinPq();

        this.distTo[s] = 0.0;

        this.pq.insert(s, 0.0);

        while (!this.pq.isEmpty()) {
            relax(graph, this.pq.delMin())
        }
    }

    relax(graph, edge) {
        for (let e in graph(edge)) {
            let w = e.to();
            if (this.distTo[w] > this.distTo[v] + e.weight()) {
                this.distTo[w] = this.distTo[v] + e.weight();
                this.edgeTo[w] = e;
                
                if (this.pq.contains(w)) {
                    pq.change(w, dist[w]);
                } else {
                    pq.insert(w, dist[w]);
                }
            }
        }
    }
    
}

module.exports = Dijkstra