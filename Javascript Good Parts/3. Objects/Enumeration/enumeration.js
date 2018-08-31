var another = {
    name : "yusuf",
    "last-name" : "unlu"
};
another.school = 'ege';
another.adress = 'mahmutbey';

var name ;

for(name in another){
    if (typeof another[name] !== 'function'){
        document.writeln(name+' : '+another[name]);
    }
}

var i ;
var properties = [
    "school","adress","last-name","name"
];

document.writeln(another['school']);
document.writeln(another[properties[1]]);
document.writeln(properties[1]);
document.writeln(properties.length);

for (i = 0 ; i<properties.length ; i++ ) {
    document.writeln(properties[i]+': '+another[properties[i]]);
    document.writeln(i);
}


