/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    numbers = numbersString.split(',');
    sum = 0;
    for (number of numbers)
        sum += +number;
    
    return sum / numbers.length;
}

module.exports.average = average;
