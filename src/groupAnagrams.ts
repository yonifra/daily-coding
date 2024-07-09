// Group Anagrams - [MEDIUM]
// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('')
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [str])
        } else {
            map.get(sortedStr).push(str)
        }
    }

    return Array.from(map.values())
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
