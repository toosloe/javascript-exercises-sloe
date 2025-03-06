const removeFromArray = function(arr, ...args) {
    /*
    run for loop and use includes() to find  dupes
    use push to make new array
    */
   let newArr = [];

    if(arguments[1].length == 0){
        return arr;
    }

    for(let i = 0;i<arr.length;i++){
        for(let j = 1;j<arguments.length;j++){
            if(arr.includes(arguments[j])){
                arr[arr.indexOf(arguments[j])] = 0;
            }
            else continue;
        }
        if(arr[i] != 0){
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

removeFromArray([1, 2, 3, 4], 3, 2);


// Do not edit below this line
module.exports = removeFromArray;
