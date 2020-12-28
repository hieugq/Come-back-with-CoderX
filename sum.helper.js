
//This helper to sum all argruments that passed to function
module.exports.sum = function (...ar){
    if(Array.isArray(ar)){
        return ar.reduce(function(acc, currVal){
            return acc + +currVal;
        }, 0);
    }
    return +ar;
}

