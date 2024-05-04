const sumAll = function(start, end) {
    let answer = 0;
    
    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (typeof start != "number" || typeof end != "number") {
        return 'ERROR';
    }

    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    for (let i = start; i <= end; i++) {
        answer += i;
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
