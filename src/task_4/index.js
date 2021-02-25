/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) 
{
    let sum = 0;
    let number = numbersString.split(',');
    let i = 0;
    for (i; i < number.length; i++)
    sum += Number(number[i]);
    result = sum/number.length;
    return result;
}

module.exports.average = average;
