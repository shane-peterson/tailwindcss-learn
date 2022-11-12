import App from '@/App';
import '@/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

let container = null;
container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus' },
];

root.render(
  <React.StrictMode>
    <App products={PRODUCTS} />
  </React.StrictMode>,
);
