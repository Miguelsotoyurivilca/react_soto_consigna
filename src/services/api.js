import { mockProducts } from '../data/mockProducts';

// Simulación de funciones de API
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(product => product.category === category);
      resolve(filteredProducts);
    }, 1000);
  });
};