
var Walk_the_DOM = function(node,passed_func){

    passed_func(node);
    node = node.firstChild;
    while(node){
        Walk_the_DOM (node,passed_func);
        node = node.nextSibling;
    }
};

var getElementsByAttribute = function(att,value){
    var results = [];

    Walk_the_DOM(document.body, function(node) {

        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual ==='string' && (actual ===value ||typeof value !== 'string')){
            results.push(node);
            console.log(node.nodeType);
        }
        console.log(node.nodeType);
        
    });
    return results;
}

var printNodeInfo = function(node){
    console.log( "node type: "+node.nodeType + " tag name: "+ node.tagName);
}

Walk_the_DOM(document.body,printNodeInfo);

