document.writeln("Example 1 low performance");
var fibon= function(n){
    return n<2 ? n:fibon(n-1)+fibon(n-2);
};

for(var i=0;i<=10;i+=1){
    document.writeln('//'+i+':'+fibon(i));
}

document.writeln("Above worked 442 times including 11 times our calls");
document.writeln();
document.writeln("Example 2 high performance");
var fibonacci = (function(){
    var memo = [0,1];
    var fib = function(n){
        var result = memo[n];
        if(typeof result !=='number'){
            result = fib(n-1)+fib(n-2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}());

for(var i=0;i<=10;i+=1){
    document.writeln('//'+i+':'+fibonacci(i));
}

document.writeln("Above worked 29 times including 11 times our calls");
document.writeln();
document.writeln("Example 3 high performance with memoization generealize");

var memoizer = function(memo,formula){
    var recur = function(n){
        var result = memo[n];
        if(typeof result !=='number'){
            result = formula(recur,n);
            memo[n]=result;
        }
        return result;
    };
    return recur;
};

var fibonacci2 = memoizer([0,1],function(recur,n){
    return recur(n-1)+recur(n-2);
});


for(var i=0;i<=10;i+=1){
    document.writeln('//'+i+':'+fibonacci2(i));
}