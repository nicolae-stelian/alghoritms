'use strict';

var fs = require('fs');

class Diraph {
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

    // undirected graph
    addEdge(v, w) {
        this.adj(v).push(w);
        this.edges += 1;
    }

    reverse() {
        let g = new Digraph(this.totalVertices);
        for (let v = 0; v < this.totalVertices; v += 1) {
            for (let w of this.adj(v)) {
                g.addEdge(w, v);
            }
        }
        return g;
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

module.exports = Digraph
