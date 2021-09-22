/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
  if(isNaN(birthYear)){
    throw new Error('birthYear is not a number');
  }
  if(birthYear < 0){
    throw new Error('birthYear can not be less then zero');
  }
  if(birthYear % 1 != 0){
    throw new Error('birthYear can not be float');
  }
  let res = new Date().getFullYear() - birthYear;
  if(res < 0){
    throw new Error('birthYear is greater then current year');
  }
  return res;
}

module.exports.countAge = countAge;
