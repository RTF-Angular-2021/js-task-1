/** Задача 5 - Развёртка объекта
Требуется написать функцию makePairs, которая
принимает любой объект,
требуется вернуть массив вида [[key, value], [key, value], ...],
где элементы key - ключи исходного объекта,
value - значение, которое содержится в поле key исходного объекта
@param {object} object - Исходный объект
@return {Array} Массив вида [[key, value], [key, value], ...]
 */
function makePairs(object) {
    if (typeof object == "object") {
        let arr = new Array;
        for (let key in object) {      
            arr.push([key, object[key]])
        }
        return arr
    }
}

module.exports.makePairs = makePairs;
