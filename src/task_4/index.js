"use strict"
/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) 
{
    let set = numbersString.split(",");
    let sum = 0;
    for (let i = 0; i < set.length; i++)
        sum += Number(set[i]);
    return (sum/set.length);
}

module.exports.average = average;
