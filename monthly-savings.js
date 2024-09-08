function monthlySavings(arr , livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid';
    }
    let totalSavings = 0; 
    if(totalSavings > 0){
        for(const item of arr){
            if(item >= 3000){
                const tax = item * (20 / 100);
                const taxPay = (item - tax);
                const restMoney = taxPay + livingCost; 
                totalSavings += restMoney; 
            }
        }
        return totalSavings;
    }
    return 'earn more';
}

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400)); // 0
// console.log(monthlySavings(100, [ 900 , 2700 , 3400])); // invalid
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000)); // earn more