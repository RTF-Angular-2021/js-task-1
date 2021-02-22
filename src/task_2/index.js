function fioFormat(inputFio) 
{
    var fullName = inputFio.split(' ');
    var result = `${fullName[1]} ${fullName[0][0]}.${fullName[2][0]}.`;
    return result;
}

module.exports.fioFormat = fioFormat;
