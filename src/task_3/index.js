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
    if (0 <= birthYear && birthYear <= currentYear && Number.isInteger(birthYear)) {
        return currentYear - birthYear;
    }
    throw new Error();
}

module.exports.countAge = countAge;
