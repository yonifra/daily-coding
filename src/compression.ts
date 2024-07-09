// This question is asked by Facebook. Given a character array, compress it in place and return the new length of the array.
// Note: You should only compress the array if its compressed form will be at least as short as the length of its original form.

const compress = (arr: any[]): number => {
    const map = new Map<String, number>()

    arr.forEach((char) => {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    })

    return map.size < arr.length ? map.size : arr.length
}

console.log(compress(['a', 'a', 'a', 'a', 'a', 'a']))
