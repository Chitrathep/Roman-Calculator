//
// Your implementations
// 
export const calculateRoman = (roman1: String, roman2: String) => {
    return integerToRoman(romanToInteger(roman1) + romanToInteger(roman2))
}


const romanToInteger = (str1: String) => {
    const num: Array<number> = [charToInteger(str1.charAt(0))];

    str1.split('').map((_, index) => {
        const substr = index + 1
        const curr: number = charToInteger(str1.charAt(substr))
        const pre: number = charToInteger(str1.charAt(substr - 1))

        if (substr + 1 <= str1.length) {
            if (curr <= pre) {
                num[0] += curr;
            } else {
                num[0] = num[0] - pre * 2 + curr;
            }
        }
    });

    return num[0];
}

const charToInteger = (c: String) => {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

const integerToRoman = (num: Number) => {
    if (typeof num !== 'number')
        return false;

    let digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop()! + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}

// console.log(roman_to_Int('XXVI'));
// console.log(roman_to_Int('CI'));
// console.log(roman_to_Int('XXVI') + roman_to_Int('CI'));
// console.log(integer_to_roman(roman_to_Int('XXVI') + roman_to_Int('CI')));
