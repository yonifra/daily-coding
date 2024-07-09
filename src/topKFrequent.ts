// Top K Frequent Elements - MEDIUM
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map()

    // Step 1: Count the frequency of each element
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    // Step 2: Use a heap to keep track of the k most frequent elements
    const minHeap = new MinHeap()

    for (const [num, count] of frequencyMap) {
        minHeap.insert({ num, count })

        // If the heap size exceeds k, remove the smallest element
        if (minHeap.size() > k) {
            minHeap.remove()
        }
    }

    // Step 3: Extract the top k elements from the heap
    const result = []
    while (minHeap.size() > 0) {
        result.push(minHeap.remove().num)
    }

    return result
}

class MinHeap {
    heap = []
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    insert(element) {
        this.heap.push(element)
        this.bubbleUp()
    }

    remove() {
        const min = this.heap[0]
        const end = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = end
            this.bubbleDown(0)
        }

        return min
    }

    bubbleUp() {
        let index = this.heap.length - 1
        const element = this.heap[index]

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            const parent = this.heap[parentIndex]

            if (element.count >= parent.count) break

            this.heap[index] = parent
            index = parentIndex
        }

        this.heap[index] = element
    }

    bubbleDown(index) {
        const length = this.heap.length
        const element = this.heap[index]

        while (true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let left, right
            let swap = null

            if (leftIndex < length) {
                left = this.heap[leftIndex]
                if (left.count < element.count) {
                    swap = leftIndex
                }
            }

            if (rightIndex < length) {
                right = this.heap[rightIndex]
                if (
                    (swap === null && right.count < element.count) ||
                    (swap !== null && right.count < left.count)
                ) {
                    swap = rightIndex
                }
            }

            if (swap === null) break

            this.heap[index] = this.heap[swap]
            index = swap
        }

        this.heap[index] = element
    }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]
