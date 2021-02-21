"use strict";
/** Задача 5 - Развёртка объекта
Требуется написать функцию makePairs, которая
принимает любой объект,
требуется вернуть массив вида [[key, value], [key, value], ...],
где элементы key - ключи исходного объекта,
value - значение, которое содержится в поле key исходного объекта
@param {object} object - Исходный объект
@return {Array} Массив вида [[key, value], [key, value], ...]
 */
function makePairs(object, dict = []) {
    for (const [key, value] of Object.entries(object)) {
        dict.push([`${key}`, value]);
    }
    return dict;
}

module.exports.makePairs = makePairs;
