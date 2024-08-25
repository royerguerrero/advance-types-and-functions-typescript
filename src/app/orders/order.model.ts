import { BaseModel } from '../base.model';

export interface Order extends BaseModel {
  products: Product[];
}
