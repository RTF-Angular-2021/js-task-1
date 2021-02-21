/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {

    if (isNaN(number)) return 0
    if (!isFinite(number)) return number
    if (number < 0) number *= -1
  
    let arr = String(number).split(''), sum = 0
  
    arr.forEach(element => {
        if (element != '.') sum += +element
    });
  
    return sum
  }

module.exports.numeralSum = numeralSum;
