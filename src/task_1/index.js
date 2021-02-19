/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

const numeralSum = number => isNaN(number) 
    ? 0 
    : !isFinite(number) 
        ? Infinity 
        : Number(number.toString()
                    .split('')
                    .filter(x => x.match('[0-9]'))
                    .reduce((a, b) => +a + +b));

module.exports.numeralSum = numeralSum;
