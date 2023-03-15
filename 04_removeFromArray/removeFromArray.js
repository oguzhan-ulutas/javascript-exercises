const removeFromArray = function(array, ...toRemove) {
   
    for (remove of toRemove) {
        let i = array.indexOf(remove);
        if (i > -1){
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
