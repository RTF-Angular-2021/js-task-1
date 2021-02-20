/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    const arr = numbersString.split(',');
    let sum = 0, count = 0;
    arr.forEach(item => {
        if (isFinite(parseInt(item))) {
            sum += parseFloat(item);
            count++;
        }
    });
    return sum / count;
}

module.exports.average = average;
