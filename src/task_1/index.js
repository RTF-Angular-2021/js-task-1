/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    let arr = number.toString().split('');
    let num = 0;
    arr.forEach(item => num += parseInt(item));
    return num;
}

module.exports.numeralSum = numeralSum;
