const reverseString = function(word) {
    let reverseWord = "";

    for (let i = 1; i <= word.length; i++){
        reverseWord += word[word.length - i];
    }

    return reverseWord

};

// Do not edit below this line
module.exports = reverseString;
