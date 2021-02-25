/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    let str = String(number);
    let sum = 0;
    str = str.replace("-", '').replace(".", '').replace(",", '');
    
    if (number == Infinity)
    {
        return number;
    }

    number = Number(str);

    while(number > 0)
    {
        sum += number % 10;
        number = Math.floor(number/10);
    }
    
    return sum;
}

module.exports.numeralSum = numeralSum;
