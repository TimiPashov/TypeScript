type Product = {
  productTown: string;
  productPrice: number;
};

type OutputProduct = {
  [key: string]: Product;
};

function lowestPrices(input: string[]) {
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
    } else if (output[productName].productPrice > product.productPrice) {
      output[productName] = product;
    } else {
      continue;
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
