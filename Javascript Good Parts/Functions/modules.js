document.writeln('-------Second Example--------');
String.method('deentityify',function(){
    //hidden entity cant access from outer
    var entity = {
        quot : '"',
        lt:'<',
        gt:'>'
    };

    return function(){
        return this.replace(/&([^&;]+);/g,
            //console.log(this),
            function(a,b){
                //console.log("a: "+a+" b: "+b);
                var r = entity[b];
                return typeof r === 'string' ? r:a;
            }
        );
    };

}());

document.writeln('&lt;&quot;&gt;'.deentityify());
document.writeln('-------Second Example--------');


var serial_number = function(){
    var prefix = '';
    var seq = 0;
    return {
        set_prefix:function(p){
            prefix=String(p);
        },
        set_seq:function(s){
            seq=s;
        },
        gensym:function(){
            var result = prefix+seq;
            seq+=1;
            return result;
        }
    };
};

var seqer = serial_number();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();


document.writeln("unique : "+unique);
document.writeln();
document.writeln('-------Explanations--------');
document.writeln("There is no way to change prefix or seq");
document.writeln("we can assign as third party method even it is not able to change prefix or seq");

