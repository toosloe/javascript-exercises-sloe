const repeatString = function(string, x) {
    let tempString = string;
    if(x < 0){
        return "ERROR";
    }
    else if(x == 0){
        return "";
    }
    for(let i = 1; i < x; i++){
        string = string.concat(tempString)
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
