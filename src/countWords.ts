console.log(countWords('this is the this marvelous'))
console.log(maxWord('this is the this marvelous'))

function countWords(str: string) {
    const map = new Map<string, number>()

    str.split(' ').forEach((word) => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }
    })

    return map
}

function maxWord(str: string) {
    let maxCount = 0
    let maxWord = ''
    const map = new Map<string, number>()

    str.split(' ').forEach((word) => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }

        const count = map.get(word)
        if (count > maxCount) {
            maxWord = word
            maxCount = count
        }
    })

    return { maxWord, maxCount }
}
