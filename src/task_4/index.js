/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let arr = numbersString.split(",");
    let sum = 0
    for (let number of arr) {
        sum += +number
    }
    let result = sum / +arr.length;
    return result;
}

module.exports.average = average;
