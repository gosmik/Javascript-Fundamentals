var another = {};
another.name = "yusuf";
another.surname = "unlu";
another.okul = 'ege';
another.adres = 'mahmutbey';

var name ;

for(name in another){
    if (typeof another[name] !== 'function'){
        document.writeln(name+' : '+another[name]);
    }
}

var i ;
var properties = [
    "okul","adres","surname","name"
];

document.writeln(another['okul']);
document.writeln(another[properties[1]]);
document.writeln(properties[1]);
document.writeln(properties.length);

for (i = 0 ; i<properties.length ; i++ ) {
    document.writeln(properties[i]+': '+another[properties[i]]);
    document.writeln(i);
}


