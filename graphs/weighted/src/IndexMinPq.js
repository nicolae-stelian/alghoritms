

'use strict';

class IndexMinPq {
    
    constructor() {
        this.heap = [];
        this.size = 0;
        this.exists = [];
    }

    isEmpty() {
        return this.size <= 0;
    }

    delMin() {

        if (this.size <= 0) {
            return false;
        }
        
        let minIdx = 0;
        let minValue = this.heap[minIdx];
        // remove from exists 
        let index = this.exists.indexOf(minValue.edge);
        this.exists.splice(index, 1);

        // swap first with the last 
        this.swap(minIdx, this.size - 1);
                
        // delete last 
        this.heap.splice(this.size - 1, 1);

        this.size -= 1;
        this.sink(minIdx);

        return minValue.edge;
    }
    
    contains(v) {
        return this.exists.indexOf(v) !== -1;
    }
    
    change(v, newPriority) {
        // not exists, use insert 
        if (!this.contains(v)) return false;
        
        let idx = -1;
        let i = 0;
        // linear search O(n) can be improved in O(log(n)) binary search
        for (let w of this.heap) {
            if (w.edge == v) {
                idx = i;
            }
            i += 1;
        }
        if (idx < 0) return;

        this.heap[idx].priority = newPriority;
        let parent = this.parent(idx);
        if (this.less(idx, parent)) { // swim idx if is less than parent
            this.swim(idx);
        } else {
            this.sink(idx);
        } 
    }

    insert(v, priority) { 
        // already exists in heap the edge
        if (this.contains(v)) return false;

        this.exists.push(v);
        this.heap.push({'edge': v, 'priority': priority});
        this.size += 1;
        // bubble data until heap condition is restored
        this.swim(this.size - 1);
    }

    /**
     * Buttom up reheapify implementation
     * @param {int} idx 
     */
    swim(idx) {
        if (idx <= 0) return;
        let parent = this.parent(idx);
        
        if (this.less(idx, parent)) {
            this.swap(idx, parent);
            this.swim(parent);
        }
    }

    /**
     * used after remove idx from top, restore heap.
     * top-down reaheapify implementation
     * @param {int} idx 
     */
    sink(idx)  {
        let left = this.left(idx);
        let right = this.right(idx);

        if (left > this.size || right > this.size) {
            return;
        }

        // nothing to do, the heap is correct.
        if (this.less(idx, left) && this.less(idx, right)) {
            return;
        }

        if (this.less(left, right)) { // promote left to the index
            this.swap(idx, left);
            this.sink(left);
        } else { // promote the right to the index
            this.swap(idx, right);
            this.sink(right);
        }
    }

    less(idx1, idx2) {
        let v = this.heap[idx1];
        let w = this.heap[idx2];
        
        if (idx2 >= this.size && idx1 < this.size)  {
            return true;            
        } else if(idx2 < this.size && idx1 >= this.size) {
            return false;
        } else if(idx2 >= this.size && idx1 >= this.size) {
           return false; // exception     
        }

        if (v == undefined || w == undefined) {
            return false;
        }

        return v.priority < w.priority;
    }

    swap(idx, targetIdx) {
        let tmp = this.heap[idx];
        this.heap[idx] = this.heap[targetIdx];
        this.heap[targetIdx] = tmp;
    }

    parent(idx) {       
        return Math.floor((idx -1) / 2);
    }

    left(idx)  {
        return idx * 2 + 1;
    }

    right(idx) {
        return idx * 2 + 2;
    }

    toString() {
        return this.heap.join(', ');
    }
}

module.exports = IndexMinPq;