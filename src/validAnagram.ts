// This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// Ex: Given the following strings...

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

const isValidAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false
    }

    let seen = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]]++
        } else {
            seen[s[i]] = 1
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!seen[t[j]]) {
            return false
        } else {
            seen[t[j]]--
        }
    }

    return Array.from(seen.values()).filter((value) => value !== 0).length > 0
        ? false
        : true
}

console.log(isValidAnagram('cat', 'tac'))
console.log(isValidAnagram('listen', 'silent'))
console.log(isValidAnagram('program', 'function'))
