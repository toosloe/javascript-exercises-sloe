const reverseString = function(string) {
    let arr = [];
    for(let i = 0;i < string.length;i++){
            arr.unshift(string.at(i));
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
