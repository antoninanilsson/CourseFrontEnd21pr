let promise=new Promise(
    function(resolve,reject){
        // reject or resolve are result of async operation

        // setTimeout(resolve,100,'someWhat');
        setTimeout(reject,100,'someWhat');
    }
);
// function for promise with two argument that are also functions
// first function execute when promise fullfilled  (resoleved succesfully)
// second function execute after som kind of error when promise rejected
promise.then(
    // executs if resolve

    value=>console.log('fulfilled: '+value),
    // executes if reject
    error=>console.log('rejected '+ error)
);

