/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let birthday = new Date();
    let currentYear = birthday.getFullYear();
    if (birthYear >= 0 && birthYear <= currentYear && Number.isInteger(birthYear)) {
        return currentYear - birthYear
    }
    else {
        throw new Error('Уупс!');
    }
}

module.exports.countAge = countAge;
