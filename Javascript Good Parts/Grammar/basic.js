document.writeln('Hello World!');

document.writeln('c'+'a'+'t' == 'cat');
if (null) 
{
    document.writeln("null true gibi davrandı");
}
else
{
    document.writeln("null false gibi davrandı");
}

var nesne = {
    airline :"thy",
    "first-name":"yusuf",
    "last_name":"unlu"
}

document.writeln(nesne["first-name"]);
document.writeln(nesne.last_name);
document.writeln(nesne["last_name"]);


if(typeof Object.create !=='function') {
    Object.create = function(o){
		var F = function(){};
        F.prototype = o;
        document.writeln("yes");
        return new F();
	};
}
else
document.writeln("not");

var another = Object.create(new Object)