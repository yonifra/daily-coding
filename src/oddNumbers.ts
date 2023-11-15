// Given two non-negative integers low and high, return the total count of odd numbers between them (inclusive).

// Ex: Given the following low and high…

// low = 1, high = 3, return 2 (1 and 3 are both odd).
// Ex: Given the following low and high…

// low = 1, high = 10, return 5.

const isOdd = (num: number): boolean => {
    return num % 2 !== 0
}

const oddNumbers = (low: number, high: number): number => {
    let count = 0

    for (let i = low; i <= high; i++) {
        count += isOdd(i) ? 1 : 0
    }

    return count
}

console.log(oddNumbers(1, 3)) // returns 2
console.log(oddNumbers(1, 10)) // returns 5
