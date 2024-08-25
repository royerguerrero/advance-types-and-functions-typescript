import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import {
  CreateProductDTO,
  FindProductDTO,
  UpdateProductDTO,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO) => {
  products.push({
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
};

export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDTO
): Product => {
  const index = products.findIndex((index) => index.id == id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
};

export const findProducts = (dto: FindProductDTO): Product[] => {
  return products;
};
