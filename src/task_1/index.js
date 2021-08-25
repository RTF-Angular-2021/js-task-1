/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    if (isNaN(number)) {
        return 0
    }
    if(!isFinite(number)){
        return number
    }

    let num = number.toString().split('');
    let sum = 0;
    console.log(num);

    num.forEach((item) => {
        if (item === '-' || item === '.' || isNaN(parseInt(item))) {
            item = 0;
        }

        let itemNum = Number(item);
        sum += itemNum;

    });
    return sum;
}

module.exports.numeralSum = numeralSum;
