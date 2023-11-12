// This question is asked by Google. Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

const intersectionWithNumbers = (
    nums1: number[],
    nums2: number[]
): number[] => {
    const map = new Set<number>(nums1)

    const result: number[] = []
    nums2.forEach((num) => {
        if (map.has(num)) {
            result.push(num)
            map.delete(num)
        }
    })

    return result
}

console.log(intersectionWithNumbers([2, 4, 4, 2], [2, 4]))
console.log(intersectionWithNumbers([1, 2, 3, 3], [3, 3]))
console.log(intersectionWithNumbers([2, 4, 6, 8], [1, 3, 5, 7]))
