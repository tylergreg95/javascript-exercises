const removeFromArray = function(arr, num) {
    
    for (let j = 1; j < arguments.length; j++) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === arguments[j]) {
                arr.splice(i, 1);
            }      
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
