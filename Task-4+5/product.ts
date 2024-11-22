// Task 4

//TypeScript is JavaScript with syntax for types
//We can run it using playground go to https://www.typescriptlang.org/play/ and paste the code there
//We can also run it using node.js by npm init then npm install typescript --save-dev and then use npx tsc filename.ts to compile the file and then node filename.js to run the file
// the file with .ts extension will be transpiled by typescript compiler to .js file and then we can run it using node command

interface Product {
  name: string;
  price: number;
}

function totalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "Shoes", price: 50 },
  { name: "Socks", price: 5 },
];

console.log(totalPrice(products));

// Task 5:
// Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.

function checkEmailValidity(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

console.log(checkEmailValidity("ahmed@x.com"));
console.log(checkEmailValidity("ahmed-email"));
