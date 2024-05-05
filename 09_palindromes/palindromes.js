const palindromes = function (string) {
    let strippedStringArr = string.match(/[abcdefghijklmnopqrstuvwxyz1234567890]/ig);
    console.log(strippedStringArr);
    let strippedString = "";
    let reversedStrippedString = "";
    for(let i = 0; i < strippedStringArr.length; i++) {
        strippedString += strippedStringArr[i];
        reversedStrippedString += strippedStringArr[strippedStringArr.length - (1 + i)];
    }

    console.log(strippedString);
    console.log(reversedStrippedString);

    if (strippedString.toLowerCase() == reversedStrippedString.toLowerCase()) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
