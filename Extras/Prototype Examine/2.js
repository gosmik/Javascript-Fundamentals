let animal = {
  stomach: [],
  sleep() {
    this.isSleeping = true; // in an object or its prototype. In a method call, this is always the object before the dot
  },
  eat(food) {
    this.stomach.push(food);
  }
};
//Example 1
{
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };

  let dog = {
    name: "White Dog",
    __proto__: animal
  };

  document.writeln("3 Actions to do : animal sleep,rabbit eat apple");
  // modifies rabbit.isSleeping
  rabbit.sleep();

  document.writeln("Rabbit sleeping: " + rabbit.isSleeping);
  document.writeln("Animal sleeping:" + animal.isSleeping);

  animal.sleep();
  document.writeln("Animal sleeping: " + animal.isSleeping);

  rabbit.eat("apple");
  document.writeln("Rabbit eaten: " + rabbit.stomach);

  // This one also has it, why? fix please.
  document.writeln("Wrong Answer => Dog eaten: " + dog.stomach);

  document.writeln(
    "If dog and rabbit has own stomaches there will be no problem"
  );
}

//Example 2
{
  function Rabbit(name) {
    this.name = name;
  }

  //When a new object is created with new Rabbit(), the new object’s [[Prototype]] is set to Rabbit.prototype
  Rabbit.prototype = animal;
  let rabbit = new Rabbit("Black Rabbit");

  document.writeln("Rabbit sleep?: " + rabbit.isSleeping);
}

//Example 3  The default "prototype" is an object with the only property constructor that points back to the function itself.
{
  function Rabbit() {}
  // by default:
  // Rabbit.prototype = { constructor: Rabbit }
  
  let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
  var node = document.createTextNode("This is new.");

  node.appendChild("Rabbit's prototype's constructor is equal to Rabbit: " + Rabbit.prototype.constructor == Rabbit);

  alert(Rabbit.prototype.constructor == Rabbit ); // true
  alert(rabbit.constructor == Rabbit); // true (from prototype)
}
