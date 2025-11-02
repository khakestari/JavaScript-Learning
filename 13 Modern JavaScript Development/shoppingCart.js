// exporting module

console.log(`exporting Module`);

// console.log('start fetching users');
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log('finished');

const shippingCost = 10;
export const cart = []; 


export const addToCart = function(product,quantitiy){
    cart.push({product,quantitiy});
    console.log(`${quantitiy} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice,totalQuantity as tq};

export default function(product,quantitiy){
    cart.push({product,quantitiy});
    console.log(`${quantitiy} ${product} added to cart`);
}
