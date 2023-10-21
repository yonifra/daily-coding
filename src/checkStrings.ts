// Given two string arrays, word1 and word2, return whether or not the two arrays represent the same string.

// Ex: Given the following word1 and word2…

// word1 = ["abc", "d"], word2 = ["ab", "cd"], return true.
// Ex: Given the following word1 and word2…

// word1 = ["a", "b", "c"], word2 = ["a", "b", "d"], return false.

const checkStrings = (word1: string[], word2: string[]): boolean => {
    const mergedWord1 = word1.join('')
    const mergedWord2 = word2.join('')

    return mergedWord1 === mergedWord2
}

console.log(checkStrings(['ab', 'cd'], ['abc', 'd']))
console.log(checkStrings(['a', 'bc'], ['ab', 'c']))
console.log(checkStrings(['a', 'bd'], ['ab', 'c']))