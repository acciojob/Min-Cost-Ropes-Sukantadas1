class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = null;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[currentIndex]) {
                smallestChildIndex = leftChildIndex;
            } else {
                smallestChildIndex = currentIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}

function mincost(arr) {
    const heap = new MinHeap();

    // Insert all ropes into the min heap
    for (let i = 0; i < arr.length; i++) {
        heap.push(arr[i]);
    }

    let totalCost = 0;

    // Combine ropes until there is only one rope left in the heap
    while (heap.heap.length > 1) {
        const rope1 = heap.pop();
        const rope2 = heap.pop();

        const currentCost = rope1 + rope2;
        totalCost += currentCost;

        heap.push(currentCost);
    }

    return totalCost;
}

module.exports=mincost;
