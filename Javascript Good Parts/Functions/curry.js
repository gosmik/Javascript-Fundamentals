Function.method('curry',function(){
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that=this;

    return function(){
        //return that.apply(null,args.concat(slice.apply(arguments)));
        return that.apply(null,args.concat(Array.prototype.slice.apply(arguments)));
    };
});


var add1 = add.curry(1);
document.writeln(add1(6));