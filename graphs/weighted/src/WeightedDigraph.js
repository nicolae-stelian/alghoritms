'use strict';

var fs = require('fs');
var WeightedEdge = require("./WeightedEdge");

class WeightedDigraph {
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

        let graph = new WeightedDigraph(vertices);

        for (let i = 0; i < edges; i += 1) {
            let line = lines[i + 2];
            let parts = line.split(' ');
            
            graph.addEdge(parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2]));
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
     * Return vertices adjacent
     */
    adj(v) {
        return this.adj[v];
    }

    // undirected graph
    addEdge(v, w, weight) {
        this.adj(v).push(new WeightedEdge(v, w, weight));
        this.edges += 1;
    }


    /**
     * String representation of the graph
     */
    toString() {
        let s =  this.totalVertices + " vertices, "+ this.totalEdges + " edges\n";
        for (let v of this.vertices) {
            for (let w of this.adj(v)) {
                s += w.toString() + "\n";
            }
            s += "\n";
        }
        return s;
    }
}

module.exports = WeightedDigraph
