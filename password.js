function password(obj){ 
    if(typeof obj !== 'object'){
        return 'invalid';
    }
    let birthDay = obj.birthYear.toString();
    let birth = birthDay.length;
    if(!obj.name || !obj.birthYear || !obj.siteName || birth < 4){
        return 'invalid';
    }
    //set password structure
    const firstLetter = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const password = firstLetter + "#" + obj.name + "@" + obj.birthYear;
    return password;
}

// Test

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200}));
// console.log(password('string'));



