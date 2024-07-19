// Custom sort
// https://leetcode.com/problems/custom-sort-string/

function customSortString(order: string, s: string): string {
    if (s.length === 0) {
        return ''
    }

    const map = {}

    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (map[current]) {
            map[current] += 1
        } else {
            map[current] = 1
        }
    }

    const str = []
    const extras = []

    for (let j = 0; j < order.length; j++) {
        const letter = order[j]

        if (map[letter]) {
            for (let i = 0; i < map[letter]; i++) {
                str.push(letter)
            }
            delete map[letter]
        }
    }

    for (let key in map) {
        for (let i = 0; i < map[key]; i++) {
            str.push(key)
        }
    }

    return str.join('')
}
