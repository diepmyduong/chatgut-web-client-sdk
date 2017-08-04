import { Product } from './product';

//Khai báo module được sử dụng
const classes = { 
    product: new Product(),
};

export default function Module(name) {
  return classes[name];
}