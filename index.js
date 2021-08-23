/* Case Quantity Update Function Declaration */
// updateCaseQty = (isIncreasing) => {
//      /* Select Case Input Field */
//     const caseInputQty = document.getElementById('case_qty');
//     /* Get Input Value of Case */
//     const caseQty = caseInputQty.value
//      if(isIncreasing){
//          /* String Convert to Integer */
//          caseInputQty.value = parseInt(caseQty) + 1;
//      }else {
//          /* String Convert to Integer */
//          caseInputQty.value = parseInt(caseQty) - 1;
//      }
//      /* Check Input Value */
//     console.log('Product Qty: ', caseQty)
// }

/* Update Phone Quantity Function Declaration  */
// updatePhoneQty = (isIncreasing) => {
//     /* Select Case Input Field */
//     const phoneInputQty = document.getElementById('phone_qty');
//     /* Get Input Value of Case */
//     const phoneQty = phoneInputQty.value
//     if(isIncreasing){
//         /* String Convert to Integer */
//         phoneInputQty.value = parseInt(phoneQty) + 1;
//     }else {
//         /* String Convert to Integer */
//         phoneInputQty.value = parseInt(phoneQty) - 1;
//     }
//     /* Check Input Value */
//     console.log('Product Qty: ', phoneQty)
// }

/* Product Quantity (Phone & Case Quantity Update) Global Function Declaration */
productQtyUpdate = (isIncreasing,inputID, totalPrice) => {
    /* Select Case Input Field */
    const productInputQty = document.getElementById(inputID);

    /* Get Input Value of Case */
    let productQty =  parseInt(productInputQty.value)

    /* Condition Apply For Increment Quantity */
    if(isIncreasing){
        /* String Convert to Integer */
        productQty = productQty + 1;
        /* Check Input Value */
        console.log('Product Decrement: ', productQty)
    }else if(productQty > 1){
        /* String Convert to Integer */
        productQty = parseInt(productQty) - 1;
        /* Check Input Value */
        console.log('Product Increment: ', productQty)
    }

    /* Input Value Set by New Product Quantity */
    productInputQty.value =  productQty

    let caseSubTotal;
    let phoneSubTotal;

    /* Condition Apply For Total Price */
    if(totalPrice == 'case_total_price'){
        const totalCasePrice = document.getElementById('case_total_price');
        totalCasePrice.innerText = productQty * 60;
    }else {
        const totalPhonePrice = document.getElementById('phone_total_price');
        totalPhonePrice.innerText = productQty * 1220;
    }
    calculator();
}

/* Product Quantity Global Function Declaration */

    productQty = (product) =>{
        const productInputQty = document.getElementById(product+'_qty').value
        const totalProduct = parseInt(productInputQty)
        console.log('Total Product: ', totalProduct)
        return totalProduct;
    }

/* Calculation Function */
    calculator = () =>{
       const phoneSubTotal = productQty('phone') * 1220;
       const caseSubTotal = productQty('case') * 60;
       const subTotal = phoneSubTotal+caseSubTotal;
       const taxTotal = subTotal / 10;
       const totalAmount = subTotal+taxTotal;
       document.getElementById('subtotal').innerText = subTotal;
       document.getElementById('tax').innerText = taxTotal;
       document.getElementById('total').innerText = totalAmount;
    }

/*
The below code for when you use id input text field

document.getElementById('case-plus').addEventListener('click', (e) => {
    updateCaseQty(true)
})

 document.getElementById('case-minus').addEventListener('click', () => {
     updateCaseQty(false)
 })

 */