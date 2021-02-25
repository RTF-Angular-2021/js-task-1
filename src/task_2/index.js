/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {
    let words = inputFio.split(' ');
    let firstname = words[0];
    let secondname = words[1];
    let patronymic = words[2];
    firstname = firstname.substr(0, 1).toUpperCase();
    patronymic = patronymic.substr(0, 1).toUpperCase();
    
    return (secondname + " " + firstname + "." + patronymic + ".");
}

module.exports.fioFormat = fioFormat;
