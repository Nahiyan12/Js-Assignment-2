

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('Memory') * 180;
    const caseTotal = getInputValue('Storage') * 5;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('Memory-plus').addEventListener('click', function () {
    updateProductNumber('Memory', 180, true);
});
document.getElementById('Memory-minus').addEventListener('click', function () {
    updateProductNumber('Memory', 180, false);
})


document.getElementById('Storage-plus').addEventListener('click', function () {
    updateProductNumber('Storage', 100, true);
});
document.getElementById('Storage-minus').addEventListener('click', function () {
    updateProductNumber('Storage', 100, false);
})