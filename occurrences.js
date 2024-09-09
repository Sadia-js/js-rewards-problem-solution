// Write a function countOccurrences(arr) that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string occurs in the array.

// const input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output: { apple: 3, banana: 2, orange: 1 }


function countOccurrences(input){
    let obj = {};
    for(const item of input){
        if(!obj[item]){
            obj[item] = 1;
           
        }
        else{
            obj[item]++;
        }
    }
    console.log(obj);
}
    // console.log(input);

const input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const result = countOccurrences(input);