import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export enum Sizes {
  S = 'small',
  M = 'medium',
  L = 'large',
  XL = 'extra large',
}

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
