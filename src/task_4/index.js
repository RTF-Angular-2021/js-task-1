/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let sum = 0;
    let src = numbersString.split(',')
    for (let i = 0 ; i < src.length; i++){
        sum += Number.parseInt (src[i])
    }
    return sum / src.length
}

module.exports.average = average;
