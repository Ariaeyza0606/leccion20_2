//Codigo Inicial
/*var feature = 'closures'; 
(function () {     
    if ( typeof feature === 'undefined' ){         
        var feature = 'callbacks';         
        console.log('JS coders love its ' + feature );     
    } else {         
        console.log('JS developers love its ' + feature );     
    } 
})();*/

//Codigo Corregido
var feature = 'closures'; 
(function () {
    if ( typeof feature === 'undefined' ){
        //Se le quito el "var"
        feature = 'callbacks';
        console.log('JS coders love its ' + feature );
    } else {
        console.log('JS developers love its ' + feature );
    }
})();