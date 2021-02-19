"use strict";
/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {

    if (!isFinite(number)) {
        if(isNaN(number))
            return 0;

        return number;
    }

    let digitArray = number.toString();
    let counter = 0;

    for (let digit = 0; digit < digitArray.length; digit++) {
        if(digitArray[digit] == '.' || digitArray[digit] == '-')
            continue;
        counter += +digitArray[digit];
    }

    return counter;
}

module.exports.numeralSum = numeralSum;
