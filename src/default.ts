export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
  };
};

const product001 = createProduct(1, true, 12);
console.log(product001);

const product002 = createProduct(2);
console.log(product002);

const product003 = createProduct(3, false, 0);
console.log(product003);

const product004 = createProduct(4, true, 100);
console.log(product004);

const product005 = createProduct(5, false);
console.log(product005);
