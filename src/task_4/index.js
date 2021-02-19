/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */

function average(numbersString) {
    let data = numbersString.split(',');
    return data.reduce((a, b) => +a + +b) / data.length;
}

module.exports.average = average;
