/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    let arr = number.toString().split('');
    let sum = 0;
    arr.forEach(item => {
        if (isFinite(parseInt(item))) {
            sum += parseInt(item)
        }
    });
    if (arr.join('') == Number.POSITIVE_INFINITY) {
        sum = Number.POSITIVE_INFINITY;
    }
    return sum;
}

module.exports.numeralSum = numeralSum;
