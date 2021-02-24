/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let numbersArray = numbersString.split(',')
    let result = 0;
    for (let number of numbersArray){
        result += Number(number);
    }
    return result != 0 ? result / numbersArray.length : 0;
}

module.exports.average = average;
