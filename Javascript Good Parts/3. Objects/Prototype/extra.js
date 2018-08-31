if (typeof Object.create !== 'function'){
    Object.create = function(o){
        var F =function() {};
        F.prototype = o;
        return new F();
    };
}

var catA = {name: "Fluffy", color: "White", age: 0};

var catB = Object.create(new Object());
catB.name = "Fluffy";
catB.color = "White";
catB.age = 0;

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 0;
Cat.prototype.adres = 'istanbul';

var catC = new Cat("Fluffy", "White");

var catD = Object.create(new catA);