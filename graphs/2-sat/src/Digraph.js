'use strict';

var fs = require('fs');

class Digraph {

    constructor() {
      this.edges = 0;
      this.adj = [];
      this.vertices = [];
    }

    /**
     * First line of file is the total numer of verictes 
     * The second line of file is the number of edges 
     * 
     * The next line are the edges separated by space
     * 
     * @param {string} file 
     */
    static createFromFile(file) {
        let content = fs.readFileSync(file, 'utf8');
        let lines = content.split("\n");

        let graph = new Digraph();
        let total = parseInt(lines[0]);

        for (let i = 0; i < total; i += 1) {
            let line = lines[i + 1];
            let parts = line.split(' ');

            let a = parseInt(parts[0]);
            let b = parseInt(parts[1]);

            // https://www.geeksforgeeks.org/2-satisfiability-2-sat-problem/
            // for every clause (A v B) we add 2 edges: notA -> B and notB -> A
            graph.addEdge(-a, b);
            graph.addEdge(-b, a);

        }
        graph.removeUndefinedAdj();
        return graph;
    }

    removeUndefinedAdj() {
        // prevent undefined adj
        for (let v of this.vertices) {
            if (this.adj[v] === undefined) {
                this.adj[v] = [];
            }
        }
    }

    /**
     * return number of edges
     */
    get totalEdges() {
        return this.edges;
    }

    // undirected graph
    addEdge(v, w) {
        if (this.adj[v] === undefined) {
            this.adj[v] = [];
        }

        if (this.vertices.indexOf(v) === -1) {
            this.vertices.push(v);
        }

        if (this.vertices.indexOf(w) === -1) {
            this.vertices.push(w);
        }

        this.adj[v].push(w);
        this.edges += 1;
    }

    getVertices() {
        return this.vertices;
    }

    reverse() {
        let g = new Digraph();
        for (let v of this.vertices) {
            for (let w of this.adj[v]) {
                g.addEdge(w, v);
            }
        }
        g.removeUndefinedAdj();

        return g;
    }

    /**
     * String representation of the graph
     */
    toString() {
        let s =  this.vertices.length + " vertices, "+ this.totalEdges + " edges\n";
        for (let v of this.vertices) {
            s += v + ": ";
            for (let w of this.adj[v]) {
                s += w + " ";
            }
            s += "\n";
        }
        return s;
    }

    dfs(v, visited, stack) {
        visited[v] = true;
        for (let w of this.adj[v]) {
            if (!visited[w]) {
                this.dfs(w, visited, stack);
            }
        }
        if (stack.indexOf(v) === -1) {
            stack.push(v);
        }
    }
}

module.exports = Digraph;
