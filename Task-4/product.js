// Task 4
function totalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Shoes", price: 50 },
    { name: "Socks", price: 5 },
];
console.log(totalPrice(products));
