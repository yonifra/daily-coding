const isPalindromic = (n: number): boolean => {
    let currentNum = n
    const numArr = []
    while (currentNum >= 1) {
        numArr.push(Math.floor(currentNum % 10))
        currentNum = currentNum / 10
    }

    let remainingSize = numArr.length
    const itemsToCheck = Math.floor(remainingSize / 2)

    for (let i = 0; i < itemsToCheck; i++) {
        const first = numArr.pop()
        const last = numArr.shift()

        if (first != last) {
            return false
        }
    }

    return true
}

console.log(isPalindromic(12321), "should be true")
console.log(isPalindromic(12322), "should be false")
console.log(isPalindromic(12312), "should be false")
console.log(isPalindromic(12), "should be false")
console.log(isPalindromic(1), "should be true")
console.log(isPalindromic(111), "should be true")
