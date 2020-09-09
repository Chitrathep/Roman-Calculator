//
// Your implementations
// 
export const calculateRoman = (roman1: String, roman2: String) => {
    return integer_to_roman(roman_to_Int(roman1) + roman_to_Int(roman2))
}

const roman_to_Int = (str1: String) => {
    if (str1 == null) return -1;
    let num = char_to_int(str1.charAt(0));
    let pre, curr;

    for (let i = 1; i < str1.length; i++) {
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i - 1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
}

const char_to_int = (c: String) => {
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

const integer_to_roman = (num: Number) => {
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

console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));
console.log(roman_to_Int('XXVI') + roman_to_Int('CI'));
console.log(integer_to_roman(roman_to_Int('XXVI') + roman_to_Int('CI')));
