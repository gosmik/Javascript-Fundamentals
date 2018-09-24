# Javascript-Fundamentals
Mostly from examples and implemantions from "Javascript the good parts"

I have implemented examples from Javascript the good parts until now
Will extend these by some other sources and my experiences

NOTES

Chapter 1 Good Parts
Good parts of javascript : functions,loose typing, dynamic objects, object literal notation
Bad parts of javascript : global variables
Functions are 1. class objects with lexical scoping.
Lexical scope : new scope is created only when you created a new function(if curly doesn't create scope)
There is no class in javascript but there is sth different object inherit system
Jslint : parse and analyze the code report bad parts so

Chapter 2 Grammar
javscript has only 1 number type which 64 bit float same as Java double
1e2 = 100
Nan is a number that produced normal and is not even equal to itself. Can check it by isNaN(number)
Single or double quotes can be used for strings
Javascript use 16 bit unicode. "A" = "\u0041"
By in , we can enumerate property names(keys) including prototype chain uppers
obj.hasOwnProperty(myVar) check it if it belongs to obj or prototype chain
if there is no return defined undefined will return
typeof(sth) can return number,string,boolean,undefined,function and object. if sth is null or array typeof will return object which is wrong

Chapter 3 Objects
Simple types are number,string,boolean,null and undefined. All others are object.
number, string and boolean are object-like and they are immutable. Objects are mutable
Property name can be any string including empty. Property value can be any js value except undefined.
Object literal is var obj = {
    "name":"Yusuf",
    "last-name":"Unlu"
};
obj.hasOwnProperty('name') // doesn't look at protoype chain it only check on the current object
obj.name <==> obj.["name"] , We have to use obj.["last-name"] format for - namings
In javascript objects pass by reference, never copied
Prototype link only works for retriving, doesn't work for update or delete.

Chapter 4 Functions
Functions are objects which are collections of name/value pairs
Linked to Function.prototype(linked to Object.protoype)
Has protoype property (include constructor property whose value is the function)
var add = function(a,b){ return a+b;};
add.constructor.constructor <==> Function.prototype
If we don't init params they will be undefined
Function can access to the vars which is nested in the function
Every function receieve this and arguments beside declared params

