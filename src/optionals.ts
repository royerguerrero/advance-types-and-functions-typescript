export const createProduct = (
  id: string | number,
  // The optionals params always must be at the end
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

// The problems to use `||` instead use nullish-coalescing `??`
// 0 === false
// '' === false
// false === false

const product001 = createProduct(1, true, 12);
console.log(product001);

const product002 = createProduct(2);
console.log(product002);

const product003 = createProduct(3, false, 0);
console.log(product003);
