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
    let arr = [];
    for (let key in object) {
        arr.push([key, object[key]]);

    }
    console.log(arr);
    return arr
}

module.exports.makePairs = makePairs;
