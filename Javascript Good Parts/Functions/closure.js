document.writeln("------Closure-1-example---");
var myObject = (function(){
    var value = 0;

    return {
        increment:function(inc){
            value+= typeof inc ==='number' ? inc :1;
        },
        getValue :function(){
            return value;
        }
    };
}());

myObject.increment();
myObject.increment();
document.writeln(myObject.getValue());


document.writeln("------Closure-2-example---");
var quo = function(status){
    return {
        get_status:function(){
            return status;
        }
    };
};

var myQuo = quo("amazed");
document.writeln(myQuo.get_status()); 


document.writeln("------Closure-3-example---");
var add_the_handlers = function(nodes){
    var helper = function(i){
        return function(e){
            alert(i);
        };
    };
    var i;
    for (i=0;i<nodes.length;i++){
        nodes[i].onclick = helper(i);
    }
};
add_the_handlers(document.getElementsByTagName("p"));
