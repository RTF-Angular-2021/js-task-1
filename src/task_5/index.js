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
    let pairs = [];

    for (let key in object) {
        pairs.push([key, object[key]]);
    }

    return pairs;
}

module.exports.makePairs = makePairs;
