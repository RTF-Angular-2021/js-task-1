/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let numbers = numbersString.split(',');
    let sum = numbers.reduce((x, y) => parseInt(x) + parseInt(y));

    return sum / numbers.length;
}

module.exports.average = average;
