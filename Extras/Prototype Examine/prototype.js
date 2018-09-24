var A = [];
A.prototype // undefined
A = function() {}
A.prototype // {} // got created when function() {} was defined

var a1 = new A();
var b1 = {};

b1.__proto__ = A.prototype;
var c1 = {};
c1 = A();
console.log('end');