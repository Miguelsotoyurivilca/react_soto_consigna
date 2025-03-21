import React, { useState } from 'react';
import ItemCounter from './ItemCounter';

const ItemDetail = ({ product, handleAddToCart, navigateToHome, navigateToCart }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  // Verificar si el producto está definido
  if (!product) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-lg text-amber-600">Producto no encontrado</p>
        <button 
          className="mt-4 bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded"
          onClick={navigateToHome}
        >
          Volver a la tienda
        </button>
      </div>
    );
  }
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    handleAddToCart(product, quantity);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={product.image || "/api/placeholder/150/150"} 
            className="w-full h-64 object-cover" 
            alt={product.name || 'Producto'} 
          />
        </div>
        <div className="md:w-2/3 p-6 bg-amber-50">
          <h2 className="text-2xl font-bold mb-3 text-amber-900">{product.name || 'Producto'}</h2>
          <p className="text-amber-800 mb-4">{product.description || 'Sin descripción'}</p>
          <p className="text-2xl font-bold mb-2 text-amber-900">
            ${product.price !== undefined ? product.price.toFixed(2) : '0.00'}
          </p>
          <p className="text-amber-700 mb-6">
            Stock disponible: {product.stock || 0}
          </p>
          
          {quantityAdded > 0 ? (
            <div className="flex flex-col items-start gap-2">
              <p className="text-green-600 font-medium">
                ¡Agregaste {quantityAdded} {quantityAdded === 1 ? 'unidad' : 'unidades'} al carrito!
              </p>
              <div className="flex gap-2">
                <button 
                  className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded"
                  onClick={navigateToHome}
                >
                  Seguir comprando
                </button>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={navigateToCart}
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-6 w-full md:w-1/2 mx-auto">
              <ItemCounter 
                stock={product.stock || 0} 
                initial={1} 
                onAdd={handleOnAdd} 
              />
            </div>
          )}
          
          <button 
            className="mt-4 border border-amber-300 bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 px-4 rounded"
            onClick={navigateToHome}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;