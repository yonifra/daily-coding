// Given an integer N, return any array that contains N elements who sum to zero.

// Ex: Given the following N...

// N = 1, return [0] (1 number that sums to zero is 0 itself).
// Ex: Given the following N...

// N = 2, return [-1, 1] (this is one possible solution).

const sumToZero = (N: number): number[] => {
    const arr: number[] = []
    const isOdd: boolean = N % 2 !== 0

    for(let i = 1; i < N+1; i+=2) {
        if (isOdd && i === N) {
            arr.push(0)
        } else {
            arr.push(N-i)
            arr.push(-(N-i))
        }
    }

    return arr
}

const sum = 499
const ans = sumToZero(sum)

console.log(`Length of array is`, ans.length)
console.log(`Summing to ${sum}`, ans)
console.log(`Total sum is`, ans.reduce((acc, curr, ans)=>acc + curr,0))