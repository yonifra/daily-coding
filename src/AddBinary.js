/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const answer = []
    let curry = 0
    a = a.split('').reverse()
    b = b.split('').reverse()

    const maxLength = Math.max(a.length, b.length)

    for(let i = 0; i < maxLength; i++) {
        let aNum = 0
        let bNum = 0
        if (a.length > i) {
            aNum = parseInt(a[i])
        }

        if (b.length > i) {
            bNum = parseInt(b[i])
        }

        const res = aNum + bNum + curry
        switch(res) {
            case 0: {
                answer.push('0')
                curry = 0
                break
            }
            case 1: {
                answer.push('1')
                curry = 0
                break
            }
            case 2: {
                answer.push('0')
                curry = 1
                break
            }
            case 3: {
                answer.push('1')
                curry = 1
                break
            }
        }
    }

    if (curry === 1) {
        answer.push('1')
    }

    return answer.reverse().join('')
};

console.log(addBinary('1011', '1001'))