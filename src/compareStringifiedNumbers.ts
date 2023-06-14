const stringToDigit = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
}

const convertToNumber = (str: string): number => {
    const ans = []
    const arr = str.split('')
    let currentString = []

    for(let i = 0; i < arr.length; i++) {
        const num = Number.parseInt(arr[i])
        if (Number.isInteger(num)) {
            checkString(currentString, ans)
            currentString = []
            ans.push(num)
        } else {
            currentString.push(arr[i])
        }
    }

    checkString(currentString, ans)
    return Number.parseInt(ans.join(''));
}

const compare = (str1, str2) => {
    const num1 = convertToNumber(str1)
    const num2 = convertToNumber(str2)

    if(num1 > num2) {
       return -1
    } else if (num2 > num1) {
        return 1
    }

    return 0
}

function checkString(currentString: any[], ans: any[]) {
    if (currentString.length > 0) {
        ans.push(stringToDigit[currentString.join('')])
        currentString = []
    }
}

console.log(compare('1two3', 'five4'))
console.log(compare('12', 'three2'))
console.log(compare('12', '1two'))

