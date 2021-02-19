/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */

function countAge(birthYear) {
    let date = new Date(birthYear > 0 ? birthYear : -birthYear, 1, 1).getFullYear();
    let now = new Date().getFullYear();
    if(date !== birthYear || birthYear > now) throw new Error("Incorrect year");
    return now - date;
}

module.exports.countAge = countAge;
