// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineDictionary = createDictionary(magazine)
    const ransomLetters = ransomNote.split('')
    for (let i = 0; i < ransomLetters.length; i++) {
        if (!magazineDictionary[ransomLetters[i]] || magazineDictionary[ransomLetters[i]] === 0) {
            return false
        }

        magazineDictionary[ransomLetters[i]]--
    }

    return true
};

function createDictionary(str) {
    const dictionary = {}

    str.split('').forEach(letter => {
        if (!dictionary[letter]) {
            dictionary[letter] = 1
        } else {
            dictionary[letter]++
        }
    })

    return dictionary
}