/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    var year = new Date().getFullYear();
    if (birthYear < 0 || birthYear > year || birthYear % 1 !== 0)
        throw new Error();
    return year - birthYear;
}

module.exports.countAge = countAge;
