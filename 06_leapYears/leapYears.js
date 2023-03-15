const leapYears = function(leap) {

    if (leap % 400 == 0) {
        return true;
    } else if (leap % 100 == 0) {
        return false;
    } else if (leap % 4 == 0) {
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
