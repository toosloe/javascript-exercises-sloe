const sumAll = function(x,y,tot) {
    tot = 0;
    if(x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)){
        return 'ERROR';
    }

    if(x>y){
        for(let i=y;i<=x;i++){
            tot += i;
        }
        return tot;
    }
    else if(y>x){
        for(let i=x;i<=y;i++){
            tot += i;
        }
        return tot;
    }
    else return tot;
};

// Do not edit below this line
module.exports = sumAll;
