function productsStuff(soapQuantity, shampooQuantity, dressQuantity, toysQuantity){
    const perSoap = 50;
    const perShampoo = 550 * (1 + 0.2);
    const perDress = 2000;
    const perToys = 500;

    let totalSoapPrice = perSoap * soapQuantity;
    if(totalSoapPrice > 500){
        const soapDiscount = totalSoapPrice * 0.2;
        totalSoapPrice = totalSoapPrice - soapDiscount; 
    }
    let totalShampooPrice = perShampoo * shampooQuantity;
    let totalDressPrice = perDress * dressQuantity;
    if(totalDressPrice > 5000){
        const dressDiscount = totalDressPrice * 0.4; 
        totalDressPrice = totalDressPrice - dressDiscount; 
    }
    let totalToysPrice = perToys * toysQuantity;
    if(totalToysPrice > 2200){
        totalToysPrice = totalToysPrice * (1 + 0.3); 
    }
    const totalPrice = totalSoapPrice + totalShampooPrice + totalDressPrice + totalToysPrice;
    return totalPrice;
}
const productsQuantity = productsStuff(5, 2, 5, 4);
console.log('Total Price :',productsQuantity,'tk');

