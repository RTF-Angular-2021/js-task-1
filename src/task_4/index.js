/** Задача 4 - Среднее арифмитическое чисел
Требуется написать функцию average, которая
принимает строку, в которой через запятую написаны числа,
требуется вернуть среднее арифмитическое перечисленных чисел
@param {string} numbersString - Строка с числами
@return {number} Среднее арифмитическое чисел в строке
 */
function average(numbersString) {
    var nums = numbersString.split(',');
    var res = 0;
    for (let i = 0; i < nums.length; i++)
    {
        res += parseInt(nums[i]);
    }
    return res/nums.length;
}

module.exports.average = average;
