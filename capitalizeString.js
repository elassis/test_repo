function capitalize(str){
    const strArr = str.split("").splice(1);
    const result = str[0].toUpperCase().concat(...strArr);
    return result;
}

module.exports = capitalize;