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
   let totalArr = [];
   let keyArr = Object.keys(object);
   let valueArr = Object.values(object);
   for (let i=0;i < keyArr.length;i++ ) {
     totalArr.push([`${keyArr[i]}`,valueArr[i]]);
   }
    return totalArr;
}

module.exports.makePairs = makePairs;
