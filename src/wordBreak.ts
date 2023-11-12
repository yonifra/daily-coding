/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
    const n = s.length
    const dp = new Array(n + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.substring(j, i)
            if (dp[j] && wordDict.includes(word)) {
                dp[i] = true
                break
            }
        }
    }

    return dp[n]
}

console.log(wordBreak("goalspecial", ["go", "goal", "goals", "special"]))
