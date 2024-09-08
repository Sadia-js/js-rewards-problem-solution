function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array, Have to put an Array';
    }
    const newArray = [];
    for(const arr of array){
        if(typeof arr === 'number' && !isNaN(arr)){
            newArray.push(arr);
        }
    }
    return newArray;
   
}

// Test

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
