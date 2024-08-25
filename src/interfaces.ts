type Sizes = 'S' | 'M' | 'L' | 'XL';

// The main difference between `interface` and `type`. Is that interfaces can be extended
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '001',
  title: 'T-SHIRT',
  createdAt: new Date(),
  stock: 20,
});

console.log(products);
