/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    let res = 0;
    if (Math.abs(number) === Infinity) return Infinity;
    for (let num of String(number)){
      if (!isNaN(+num)) res += +num;
    }
    return res;
}

module.exports.numeralSum = numeralSum;
