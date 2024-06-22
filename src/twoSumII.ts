function twoSum(numbers: number[], target: number): number[] {
    // let maxIndex = findMaxIndex(numbers, target)

    for (let i = 0; i < numbers.length-1; i++) {
        const targetIndex = binarySearch(numbers, i+1, numbers.length, target - numbers[i])
        console.log({targetIndex, i});
        if (targetIndex !== -1){
            return [i, targetIndex]
        }
    }

    return []
};

function binarySearch(numbers: number[], start: number, end: number, target: number): number {
    if (start >= end && numbers[start] !== target) {
        return -1
    }
    const mid = (end - start)/2

    if (numbers[mid] === target) {
        return mid;
    } else if (numbers[mid] < target) {
        return binarySearch(numbers, mid+1, end, target)
    } else {
        return binarySearch(numbers, start, mid-1, target)
    }
}

// function findMaxIndex(numbers: number[], target: number): number {
//     for (let i = numbers.length - 1; i >= 1; i--) {
//         if (numbers[i-1] < target) {
//             return i
//         }
//     }

//     return numbers.length - 1
// }

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([2,3,4], 6)) // [0,2]
console.log(twoSum([-1,0], -1)) // [0,1]