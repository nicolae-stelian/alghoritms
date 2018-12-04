'use strict';

var fs = require('fs');

class Graph {
    /**
     * Create a V-vertex graph with no edge 
     * @param {int} vertices (the total number of vertices of the graph)
     */
    constructor(vertices) {
        // create an array starting from 0 to vertices-1
      this.vertices = [...Array(vertices).keys()];
      // initialize adjacent list
      for (let v of this.vertices) {
        this.adj[v] = [];
      }
      this.edges = 0;      
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
        
        let vertices = parseInt(lines[0]);
        let edges = parseInt(lines[1]);

        let graph = new Graph(vertices);

        for (let i = 0; i < edges; i += 1) {
            let line = lines[i + 2];
            let parts = line.split(' ');
            graph.addEdge(parseInt(parts[0]), parseInt(parts[1]));
        }
        
        return graph;
    }

    /**
     * return the number of vertices
     */
    get totalVertices() {
        return this.vertices.length;
    }

    /**
     * return number of edges
     */
    get totalEdges() {
        return this.edges;
    }

    /**
     * Return vertices adjacent to v
     * @param {int} v 
     */
    adj(v) {
        return this.adj[v];
    }
    
    degree(v) {
        return this.adj(v).length;
    }

    maxDegree() {
        let max = 0;
        for (let v of this.vertices) {
            if (this.degree(v) > max) {
                max = this.degree(v);
            }
        }
        return max;
    }

    // undirected graph
    addEdge(v, w) {
        this.adj(v).push(w);
        this.adj(w).push(v);
        this.edges += 1;
    }

    /**
     * total two times the number of edges / number of vertices
     */
    averageDegree() {
        return 2 * this.totalEdges / this.totalVertices;
    }

    numberOfSelfLoops() {
        let total = 0; 
        
        for(let v of this.vertices) {
            for(let w of this.adj(v)) {
                if (v == w) total += 1;
            }
        }

        return total;
    }


    /**
     * String representation of the graph
     */
    toString() {
        let s =  this.totalVertices + " vertices, "+ this.totalEdges + " edges\n";
        for (let v of this.vertices) {
            s += v + ": ";
            for (let w of this.adj(v)) {
                s += w + " ";
            }
            s += "\n";
        }
        return s;
    }
}

module.exports = Graph
