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
    if (number == Infinity) {
        return Infinity
    }
    
    if (isNaN(number) || number == 0){
        return 0;
    }

    for (let i = 0; i < number.toString(); i++)
    {
        if (stringNumber[i] == "." || stringNumber[i] == "-") continue;
        result += stringNumber[i];
    }

    return result;
}

module.exports.numeralSum = numeralSum;
