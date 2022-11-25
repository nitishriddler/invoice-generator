export interface product {
  id?: number;
  name?: string;
  qty?: number;
  Mrp?: number;
}

export interface order {
  id?: number;
  sellerId?: number;
  customerId?: number;
  items: Array<product>;
}
