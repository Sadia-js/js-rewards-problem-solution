// Write a function that removes duplicate values from an array.


const doubled = [12, 90, 78, 56, 8, 90, 12, 67, 9, 78, 67, 8, 56];

function removeDuplicates(input){
    let newArray = [];
    for(const item of input){
        if(!newArray.includes(item)){
            newArray.push(item);
        }
    }
    return newArray;
}

const array = removeDuplicates(doubled);
console.log(array);

