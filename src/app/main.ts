import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';
import { Sizes } from './products/product.model';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.product(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.enumValue(Sizes),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(
      Array.from({ length: faker.number.int({ min: 3, max: 10 }) }, () =>
        faker.commerce.productAdjective()
      )
    ),
    categoryId: faker.string.uuid(),
  });
}

const firstProduct = products[0];
updateProduct(firstProduct.id, {
  title: 'Glass',
  stock: 0,
});

console.log(firstProduct);

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  tags: ['Gorgeous', 'Pretty']
});
