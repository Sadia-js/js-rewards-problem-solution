function productsStuff(soapQuantity, shampooQuantity, dressQuantity, toysQuantity){
    const perSoap = 50;
    const perShampoo = addTax(550, 0.2);
    const perDress = 2000;
    const perToys = 500;
    
    let totalSoapPrice = perSoap * soapQuantity;
    if(totalSoapPrice > 500){
        totalSoapPrice = discount(totalToysPrice, 0.3); 
    }
    let totalShampooPrice = perShampoo * shampooQuantity;
    let totalDressPrice = perDress * dressQuantity;
    if(totalDressPrice > 5000){
        totalDressPrice = discount(totalDressPrice, 0.4);
    }
    let totalToysPrice = perToys * toysQuantity;
    if(totalToysPrice > 2200){
        totalToysPrice = addTax(totalToysPrice, 0.3); 
    }
    const totalPrice = totalSoapPrice + totalShampooPrice + totalDressPrice + totalToysPrice;
    return totalPrice;
    
}
const productsQuantity = productsStuff(5, 2, 5, 4);
console.log('Total Price :',productsQuantity,'tk');
// for discount
function discount(price, offerValue){
    const discountPrice = price * offerValue;
    const total = price - discountPrice;
    return total;
}
// for Tax
function addTax(price, taxRate){
    const tax = price * (1 + taxRate);
    return tax;
}