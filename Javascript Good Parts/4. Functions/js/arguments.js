var sum = function(){
    var i,sum =0;
    for (i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

document.writeln("1 den 5'e kadar say"+"\u0131"+"lar"+"\u0131"+"n toplam"+"\u0131"+": "+sum(1,2,3,4,5,6));