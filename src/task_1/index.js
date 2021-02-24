/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    let result = 0;
    let stringNumber = number.toString();
    if (!isFinite(number)) {
        if (isNaN(number)) return 0;
        return Infinity;
    }

    for (let i = 0; i < stringNumber.length; i++)
    {
        if (stringNumber[i] == "." || stringNumber[i] == "-") continue;
        result += stringNumber[i];
    }

    return result;
}

module.exports.numeralSum = numeralSum;
