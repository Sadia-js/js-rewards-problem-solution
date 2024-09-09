function getMonthlySavings(){
    const pizzaPrice = 1000;
    const burgerPrice = 300;
    const juicePrice = 123;
    const waterPrice = 20;
    let monthlySavings;

    const perDaySale = (50 * pizzaPrice) + (100 * burgerPrice) + (100 * juicePrice) + (50 * waterPrice);
    const monthlySale = perDaySale * 30;
    const stuffExpense = (15000 * 5) + 30000;

    monthlySavings = monthlySale - stuffExpense;
    console.log('Monthly Savings:', monthlySavings,'tk');
}

getMonthlySavings();