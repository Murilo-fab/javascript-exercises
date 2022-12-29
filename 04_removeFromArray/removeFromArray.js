const removeFromArray = function() {
    let result = Array.from(arguments[0]);

    for (let i = 1; i < arguments.length; i++) {
        let id = result.indexOf(arguments[i]);
        if ( id > -1) {
            result.splice(id, 1);
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
