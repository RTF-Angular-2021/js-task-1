/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {
    if (typeof number === "number") {
        let summ = 0;
        if (number < 0 && Number.isInteger(number) && isFinite(number)) {
            number *= -1;
            let str = String(number).split('');
            for (let i = 0; i < str.length; i++) {
                summ += Number(str[i]);
            }
            return summ;
        } else if (number < 0 && !Number.isInteger(number) && isFinite(number)){
            number *= -1;
            let str = String(number).split('');
            for (let i = 0; i < str.length; i++) {
                if (str[i] == "."){
                    false
                } else {
                    summ += Number(str[i]);
                }
            }
            return summ;
        } else if (number > 0 && !Number.isInteger(number) && isFinite(number)){
            let str = String(number).split('');
            for (let i = 0; i < str.length; i++) {
                if (str[i] == "."){
                    false
                } else {
                    summ += Number(str[i]);
                }
            }
            return summ;
        } else if (!isFinite(number) && !isNaN(number)) {
            return summ = Infinity;
        } else if (isNaN(number)){
            return summ = number;
        } else {
            let str = String(number).split('');
            for (let i = 0; i < str.length; i++) {
                summ += Number(str[i]);
            }
            return summ;
        }
    }
}


module.exports.numeralSum = numeralSum;
