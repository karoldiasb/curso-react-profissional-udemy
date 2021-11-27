const faker = require("faker"); //estrutura que o node entende

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: "",
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug,
    });
  }
  return result;
};

//gera um arquivo json com a listagem de produtos
console.log(JSON.stringify(buildProductList(100), null, "  "));

//executar no terminal: node scripts/generators/products > src/models/builders/fixtures/products.json
