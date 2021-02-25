/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {

    let firstname = inputFio[0];   
    let secondname = inputFio.slice(inputFio.indexOf(" ") + 1,inputFio.lastIndexOf(" "));
    let patronymic = inputFio.slice(inputFio.lastIndexOf(" ") + 1,inputFio.lastIndexOf(" ") + 2);
    
    return (secondname + " " + firstname + "." + patronymic + ".");

}

module.exports.fioFormat = fioFormat;
