var foo = function(){
    var a=3,b=5;
    document.writeln("foo start a : "+a+" b: "+b);
    var bar = function(){
        // we have access to the outer parameters except this and arguments
        //b allocated alredy b is not initialized in contrast to defined
        document.writeln("bar start a : "+a+" b: "+b);
        var b=7,c=11;
        document.writeln("a : "+a+" b: "+b+" c: "+c);
        a+=b+c;
        document.writeln("a : "+a+" b: "+b+" c: "+c);
    }
    document.writeln("before bar a : "+a+" b: "+b);
    bar();
    document.writeln("after bar a : "+a+" b: "+b);
}

foo();