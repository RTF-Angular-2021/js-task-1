/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    if (isNaN(number)) {
        return 0;
    }

    if (!isFinite(number)) {
        return number;
    } else {
        let numberString = number.toString();
        let sum = 0;

        for (let symbol of numberString) {
            if (!isNaN(+symbol)) {
                sum += +symbol;
            }
        }

        return sum;
    }
}

module.exports.numeralSum = numeralSum;
