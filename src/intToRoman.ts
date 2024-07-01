// Int to Roman String - Medium
// https://leetcode.com/problems/integer-to-roman/
// Given an integer, convert it to a roman numeral.

var intToRoman = function(num) {
    let roman = '';
    const romanNums = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    for (let key in romanNums) {
        while (num >= romanNums[key]) {
            roman += key;
            num -= romanNums[key];
        }
    }
    return roman;
}

console.log(intToRoman(3749)) //MMMDCCXLIX