function calculateMoney(ticketSale){
    if(typeof ticketSale !== 'number' || ticketSale < 0){
        return 'Invalid Number';
    }
    const dailySavings = ( ticketSale * 120) - ( 500 + (8 * 50) );
    return dailySavings;
}

// Test

// console.log(calculateMoney(-130)); //Invalid Number
// console.log(calculateMoney(1055)); //125700
// console.log(calculateMoney('tisha')); //Invalid Number
// console.log(calculateMoney(10)); //300