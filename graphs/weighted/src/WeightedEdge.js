'use strict';

class WeightedEdge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }

    from () {
        return this.v;
    }

    to() {
        return this.w;
    }

    toString() {
        return `${this.v} -> ${this.w} ${this.weight}`;
    }
}

module.exports = WeightedEdge