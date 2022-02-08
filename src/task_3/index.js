/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let now = new Date()
    if (birthYear < 0 || birthYear > now.getFullYear()) {
        throw new Error("Некорректный год");
    }

    return (now.getFullYear() - birthYear)
}


module.exports.countAge = countAge;
