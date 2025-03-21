import React from 'react';

const Item = ({ product, navigateToProductDetail }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <img 
        src={product.image} 
        className="w-full h-48 object-cover" 
        alt={product.name || 'Producto'} 
      />
      <div className="p-4 flex flex-col flex-grow bg-amber-50">
        <h5 className="text-lg font-semibold mb-2 text-amber-900">{product.name || 'Producto'}</h5>
        <p className="text-amber-800 text-sm mb-2 flex-grow">
          {product.description && product.description.length > 60 
            ? `${product.description.substring(0, 60)}...` 
            : (product.description || 'Sin descripción')}
        </p>
        <p className="text-lg font-bold mb-1 text-amber-900">
          ${product.price !== undefined ? product.price.toFixed(2) : '0.00'}
        </p>
        <p className="text-amber-700 text-xs mb-3">
          Stock disponible: {product.stock || 0}
        </p>
        <button 
          className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded text-sm mt-auto"
          onClick={() => navigateToProductDetail(product.id)}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default Item;