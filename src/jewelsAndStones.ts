// This question is asked by Amazon.
// Given a string representing your stones and another string representing a
// list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

const jewelsAndStones = (jewels: string, stones: string): number => {
    const jewelsSet = new Set(jewels.split(''))
    let count = 0

    stones.split('').forEach((stone) => {
        if (jewelsSet.has(stone)) {
            count++
        }
    })

    return count
}

console.log(jewelsAndStones('abc', 'ac'))
console.log(jewelsAndStones('Af', 'AaaddfFf'))
console.log(jewelsAndStones('AYOPD', 'ayopd'))
