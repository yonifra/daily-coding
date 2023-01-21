// This question is asked by Microsoft. Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// Ex: Given the following strings...

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0

const findUniqueCharacter = (s: string): number => {
    let seen = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]]++;
        } else {
            seen[s[i]] = 1;
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (seen[s[j]] === 1) {
            return j;
        }
    }

    return -1;
}

console.log(findUniqueCharacter('abcabd'));
console.log(findUniqueCharacter('thedailybyte'));
console.log(findUniqueCharacter('developer'));
console.log(findUniqueCharacter('aavvcc'));