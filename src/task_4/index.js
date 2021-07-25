/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let arrStr = numbersString.split(",");
    let arrNum = arrStr.map(el => Number(el));
    let sum = 0;
    for (let i=0; i<arrNum.length; i++) {
        sum += arrNum[i];
    }
    let avg = sum/arrNum.length;
    return avg;
}

module.exports.average = average;
