import React from 'react';
import Item from './Item';

const ItemList = ({ products, navigateToProductDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map(product => (
          <Item 
            key={product.id} 
            product={product} 
            navigateToProductDetail={navigateToProductDetail} 
          />
        ))
      ) : (
        <div className="col-span-full text-center">
          <p className="bg-amber-100 border border-amber-300 text-amber-700 px-4 py-3 rounded">
            No hay productos disponibles en esta categoría
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemList;