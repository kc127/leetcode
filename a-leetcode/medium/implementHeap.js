class HeapItem{
  constructor(item = 0, priority = item) {
    this.item = item;
    this.priority = item;
  }
}

class minHeap {
   constructor(){
      this.heap = [];
   }

   push(node){
     this.heap.push(node);
     this.bubbleUp();
   }

   pop(){
      let min = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.bubbleDown();
   }

   bubbleUp(){
     let index = this.heap.length - 1;
     while (index > 0){
        let parentIndex = Math.floor((index - 1)/2);
        if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
        [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];
        index = parentIndex;
     }
   }

   bubbleDown(){
      let index = 0;
      let n = this.heap.length;
      let min = index;
      while (index < n) {
          let leftIdx = 2*index + 1;
          let rightIdx = leftIdx + 1;

         if ((leftIdx < n && this.heap[leftIdx] < this.heap[index]) || (rightIdx < n && this.heap[rightIdx] < this.heap[index])) {
            if (rightIdx < n) {
               min = this.heap[leftIdx].priority < this.heap[rightIdx].priority ? leftIdx : rightIdx;
            } else {
              min = leftIdx;
            }
         }

         if (min === index) break;
         [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]];
         index = min;
      }
   }
}

/*
                        3<
                    8      9
                12     10

store the root
set root as the last element
remove last element

*/

let node1 = new HeapItem(8);
let node2 = new HeapItem(10);
let node3 = new HeapItem(9);
let node4 = new HeapItem(12);


let minHeap1 = new minHeap();
minHeap1.push(node1);
minHeap1.push(node2);
minHeap1.push(node3);
minHeap1.push(node4);
minHeap1.pop();

console.log(minHeap1);