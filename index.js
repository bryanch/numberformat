
function formatInteger(n){
    if(n<1000){
        return String(n);
    }
    else if(n<1e5){
        return ((n/100)>>>0)/10+'K';
    }
    else if(n<1e6){
        return ((n/1000)>>>0)+'K';
    }
    else if(n<1e8){
        return ((n/1e5)>>>0)/10+'M';
    }
    else if(n<1e9){
        return ((n/1e6)>>>0)+'M';
    }
    else if(n<1e11){
        return ((n/1e8)>>>0)/10+'B';
    }
    else if(n<1e12){
        return ((n/1e9)>>>0)+'B';
    }
    else{
        return String(n);
    }
};

function formatPercentage(p){
    return (((p*1000)>>>0)/10)+'%';
}

function formatLongNumber(n){
    var s = String(n);
    var i=s.length%3;
    if(i==0)i=3;
    var result = s.slice(0,i);
    for(;i<s.length;i+=3){
        result += ','+s.slice(i, i+3);
    }

    return result;
}

module.exports = {
    integer: formatInteger,
    percentage: formatPercentage,
    longint: formatLongNumber
};
