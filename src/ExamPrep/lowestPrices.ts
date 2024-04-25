type Product = {
  productTown: string;
  productPrice: number;
};

type OutputProduct = {
  [key: string]: Product;
};

function comparePrices(product1: Product, product2: Product): Product {
  if (product1.productPrice > product2.productPrice) {
    return product2;
  }
  return product1;
}

function lowestPrices(input: string[]): void {
  const output: OutputProduct = {};
  for (let item of input) {
    const productDetails: string[] = item.split(" | ");

    const productTown: string = productDetails.shift()!;
    const productName: string = productDetails.shift()!;
    const productPrice: number = Number(productDetails.shift())!;

    const product: Product = { productTown, productPrice };
    if (!output[productName]) {
      output[productName] = product;
      continue;
    } else {
      output[productName] = comparePrices(output[productName], product);
    }
  }
  Object.keys(output).forEach((key) =>
    console.log(
      `${key} -> ${output[key].productPrice} (${output[key].productTown})`
    )
  );
}
lowestPrices([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 3",

  "Sofia | Orange | 2",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
