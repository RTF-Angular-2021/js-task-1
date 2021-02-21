/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let num_arr = numbersString.split(',').map((num_str) => +num_str);
    return num_arr.reduce((cur, prev) => cur + prev) / num_arr.length;
}

module.exports.average = average;
