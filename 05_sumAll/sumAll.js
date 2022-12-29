const sumAll = function(one, two) {
    if (typeof(one) != "number" || typeof(two) != "number") {
        return "ERROR"
    } else if (one >= 0 && two >= 0) {
        if (one < two)
            return (one + two)*(two - one + 1)/2;
        else
            return (one + two)*(one - two + 1)/2;
    } else
        return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
