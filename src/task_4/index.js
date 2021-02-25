/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let count = 0;
    let sum = 0;
    arr = numbersString.split(',');
    arr.forEach(obj => {
        sum += parseInt(obj);
        count += 1;
    });
    
    return sum / count;
}

module.exports.average = average;
