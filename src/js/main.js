import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData('tents');
const listElement = document.querySelector('.product-list');

const tentList = new ProductList('tents', dataSource, listElement);
tentList.init();
