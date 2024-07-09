// Koko Eating Bananas - MEDIUM
// https://leetcode.com/problems/koko-eating-bananas/
// Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles: number[], h: number): number {
    if (!piles || piles.length === 0 || h < piles.length) {
        return 0
    }

    let min = Math.max(...piles)
    let left = 1
    let right = min

    while (left <= right) {
        const mid = Math.ceil((right + left) / 2)
        let minHours = 0
        for (let i = 0; i < piles.length; i++) {
            minHours += Math.ceil(piles[i] / mid)
        }

        if (minHours <= h) {
            min = Math.min(min, mid)
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return min;
};

console.log(minEatingSpeed([3,6,7,11], 8) === 4)
console.log(minEatingSpeed([30,11,23,4,20], 5) === 30)
console.log(minEatingSpeed([30,11,23,4,20], 6) === 23)