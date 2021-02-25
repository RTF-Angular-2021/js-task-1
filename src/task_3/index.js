/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    currentYear = (new Date()).getFullYear();
    if ((birthYear > currentYear) || (birthYear < 0) || (String(birthYear).indexOf('.') !== -1)) {
        throw new Error();
    }
    else {
        return currentYear - birthYear;
    }

}

module.exports.countAge = countAge;
