document.writeln("Js Invocation Patterns");
this.value = 100;

var add = function(a,b){
    return a+b;
};

//Method invocation pattern
var myObject = {
    value:0,
    increment:function (inc){
        this.value +=typeof inc ==='number' ? inc:1;
    }
}
document.writeln("myObject.value: " + myObject.value);
document.writeln("Method Invocation pattern increment 1");
myObject.increment();

document.writeln("myObject.value: " + myObject.value);
document.writeln("Method Invocation pattern increment 2");
myObject.increment(2);



//function invocation wrong version
myObject.doubleWrong = function(){

    var helper = function(){
        this.value = this.value + this.value;
    }
    helper();
}

document.writeln("myObject.value: " + myObject.value);
document.writeln("Function invocation \"this\" binded to global");
myObject.doubleWrong();
document.writeln("myObject.value: " + myObject.value);

//function invocation correct version
myObject.doubleCorrect = function(){
    var that = this;
    var helper = function(){
        that.value = that.value + that.value;
    }
    helper();
}

document.writeln("Function invocation workaround solution");
myObject.doubleCorrect();
document.writeln("myObject.value: " + myObject.value);


//Constructor invocation pattern
document.writeln("Constructor invocation pattern")
var Quo = function(string){
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status;
}

var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());



//Apply invocation pattern
document.writeln("Apply invocation pattern");
var array = [3,4];
var sum = add.apply(null,array);
document.writeln("sum: "+sum);


myObject.increment.apply(null,array);
document.writeln("myObject.value: " + myObject.value+"didn't change apply works on prototype");

var statusObject = {
    status:"status-A"
}

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln("status : "+status);
