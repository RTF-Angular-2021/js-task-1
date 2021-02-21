/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let current_year = new Date().getFullYear();
    if (!(birthYear > current_year || birthYear < 0 || !Number.isInteger(birthYear))) {
        return current_year - birthYear;
    } else {
        throw "Неверный год рождения";
    }
}

module.exports.countAge = countAge;
