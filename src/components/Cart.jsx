import React from 'react';

const Cart = ({ cart, navigateToHome }) => {
  const total = cart.reduce((sum, item) => {
    const price = item.price !== undefined ? item.price : 0;
    const quantity = item.quantity !== undefined ? item.quantity : 0;
    return sum + (price * quantity);
  }, 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-amber-900">Carrito de compras</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-amber-700 mb-4">Tu carrito está vacío</p>
          <button 
            className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded"
            onClick={navigateToHome}
          >
            Volver a la tienda
          </button>
        </div>
      ) : (
        <>
          <div className="divide-y divide-amber-200">
            {cart.map(item => (
              <div key={item.id || Math.random()} className="py-4 flex items-center">
                <img 
                  src={item.image || "/api/placeholder/150/150"} 
                  alt={item.name || "Producto"} 
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium text-amber-900">{item.name || "Producto sin nombre"}</h3>
                  <p className="text-amber-700 text-sm">Cantidad: {item.quantity || 0}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-900">
                    ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                  </p>
                  <p className="text-amber-700 text-sm">
                    ${item.price !== undefined ? item.price.toFixed(2) : "0.00"} c/u
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border-t border-amber-200 pt-4">
            <div className="flex justify-between items-center font-bold text-lg text-amber-900">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button 
                className="border border-amber-300 bg-white hover:bg-amber-50 text-amber-800 py-2 px-4 rounded"
                onClick={navigateToHome}
              >
                Seguir comprando
              </button>
              <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded">
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;