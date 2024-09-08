function checkName(name){
    const expectedChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
    if(typeof name !== 'string'){
        return 'invalid';
    }
    let lastChar = name.slice(-1).toLowerCase();

    return expectedChar.includes(lastChar)? "Good Name": "Bad Name"; 

}

// test

// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

