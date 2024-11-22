// Task 4
function totalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Shoes", price: 50 },
    { name: "Socks", price: 5 },
];
console.log(totalPrice(products));
// Task 5:
// Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.
function checkEmailValidity(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
console.log(checkEmailValidity("ahmed@x.com"));
console.log(checkEmailValidity("ahmed-email"));
