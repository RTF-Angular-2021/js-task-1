/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
	if (number == NaN)
		return 0;
	if (!isFinite(number))
		return Infinity;

	let result = 0;
	let stringNum = Math.abs(number).toString().replace('.', '');
	for (digit of stringNum)
		result += parseInt(digit);

	
	return result;
}

module.exports.numeralSum = numeralSum;
