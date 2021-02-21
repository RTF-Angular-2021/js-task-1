"use strict";
/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let currentYear = new Date().getFullYear();
    if(birthYear !== parseInt(birthYear,10))
        throw new Error(); //new Error(`IllegualArgument! Waiting for X in integer-domain, but was ${birthYear}`)
    if (currentYear < birthYear || birthYear<0)
        throw new Error();
    return Math.abs(currentYear - birthYear);
}

module.exports.countAge = countAge;
