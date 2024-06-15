// Hamming Distance [EASY]
// https://leetcode.com/problems/hamming-distance/

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    let count = 0;
    while (xor) {
        count += xor & 1;
        xor >>= 1;
    }
    return count;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(1, 3));