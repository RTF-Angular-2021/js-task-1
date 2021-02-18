/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let now = new Date().getFullYear();
    if (isFinite(now) && parseInt(birthYear) === parseFloat(birthYear) && birthYear <= now && birthYear > 0) {
        return now - birthYear;
    } else throw 'error';
}

module.exports.countAge = countAge;
