/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    if (number == Infinity)
        return Infinity;
    else if (isNaN(number))
        return 0;
    var num = String(number);
    var res = 0;
    for (let i = 0; i < num.length; i++)
    {
        var converted = parseInt(num[i]);
        if (!isNaN(converted))
            res+=parseInt(num[i]);    
    }
    return res;
}

module.exports.numeralSum = numeralSum;
