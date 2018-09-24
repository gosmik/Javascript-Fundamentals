var obj = {
    "name" : "yusuf",
    "surname":"unlu"
};

if (typeof Object.create !== 'function'){
    Object.create = function(o){
        var F =function() {};
        F.prototype = o;
        return new F();
    };
}
var another_obj = Object.create(obj);

another_obj['school'] = 'ege';

document.writeln('obj name:'+obj.name);
document.writeln('another_obj name:'+another_obj.name);

another_obj['name'] = 'New Guy';

document.writeln('obj name:'+obj.name);
document.writeln('another_obj name:'+another_obj.name);
document.writeln('another_obj.prototype name:'+another_obj.__proto__.name);

document.writeln('Above examples mean prototype link works for retreiving but doesn\'t work for update ');