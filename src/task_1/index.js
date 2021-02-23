/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
*/

function numeralSum(number)
{
    if (!isFinite(number)){
        if (isNaN(number)) return 0;
        return Infinity;
    }

    let sum = 0;
    let numberArray = number.toString();

    for (let i = 0; i < numberArray.length; i++) 
    {
        if (numberArray[i] == '.' || numberArray[i] == '-') continue;
        sum += +numberArray[i];
    }

    return sum;
}

module.exports.numeralSum = numeralSum;
