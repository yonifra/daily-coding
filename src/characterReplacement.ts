// Longest Repeating Character Replacement - Medium
// https://leetcode.com/problems/longest-repeating-character-replacement/
// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
// In one operation, you can choose any character of the string and change it to any other uppercase English character.
// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.


function characterReplacement(s: string, k: number): number {
    if (!s || !s.length) {
        return 0;
    }

    let right = 0;
    let left = 0;
    const map = {}
    map[s[0]] = 1;
    let max = -Infinity;
    let windowSize;

    while (right < s.length) {
        windowSize = right - left + 1;

        let maxOccurances = {char: '', count: -Infinity};
        for (let i in map) {
            if (maxOccurances.count < map[i]) {
                maxOccurances = {char: i, count: map[i]}
            }
        }

        // By this point we should have the maximum occurance letter

        if (windowSize - maxOccurances.count <= k) {
            // valid window
            max = Math.max(max, windowSize)
            right++
            if (right < s.length) {
                incrementEntry(map, s[right])
            }
        } else {
            map[s[left]] -= 1;
            left++
        }
    }

    return max;
};

function incrementEntry(map, c) {
    if (!map[c]) {
        map[c] = 1;
    } else {
        map[c] += 1;
    }
}

console.log(characterReplacement("ABAB", 2));