var objWrong = {};
objWrong.add = function(val1, val2) {
    var inner = function() {
        this.sum = val1 + val2;
    }
    inner();
}
objWrong.add(2, 4);
document.writeln("Wrong result: "+objWrong.sum);

var obj = {};
obj.add = function(val1, val2) {
    this = that;
    var inner = function() {
        that.sum = val1 + val2;
    }
    inner();
}
obj.add(2, 4);
document.writeln("Wrong result: "+obj.sum);

