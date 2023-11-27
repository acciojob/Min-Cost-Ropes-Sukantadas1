function mincost(arr)
{ 
//write your code here
// return the min cost
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
