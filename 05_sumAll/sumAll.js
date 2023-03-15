const sumAll = function(a, b) {

    let sum = 0;

    if (typeof(a) != "number" || typeof(b) != "number") {
        sum = "ERROR"
    } else if (a < 0 || b < 0) {
        sum = "ERROR"
    } else if (a < b && a >= 0 && b >= 0) {
        for (a; a <= b; a++) {
            sum += a;
        } 
    } else if (a > b && a >= 0 && b >= 0) {
        for (b; b <= a; b++) {
            sum += b
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
