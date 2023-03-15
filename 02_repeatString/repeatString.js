const repeatString = function(string, repeat) {
    let result = string

    if (repeat < 0) {
        result = "ERROR";
    } else if (repeat == 0) {
        result = ""
    } else {
        for (let i = 1; i < repeat; i++) {
            result += string;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
