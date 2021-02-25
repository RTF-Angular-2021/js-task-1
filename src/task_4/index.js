/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    let sum = 0;
    let count = 0;
    let stringNum = numbersString.split(",");
    for(let i = 0; i < stringNum.length; i++){
        sum += Number(stringNum[i]);
        count +=1;
    }
    return sum/count;
}

module.exports.average = average;
