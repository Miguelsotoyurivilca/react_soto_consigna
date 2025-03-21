import React, { useState } from 'react';

const ItemCounter = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-3">
        <button 
          className={`px-3 py-1 border border-amber-300 rounded-l ${count <= 1 ? 'bg-amber-100 text-amber-400' : 'bg-white text-amber-700 hover:bg-amber-50'}`}
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b border-amber-300 bg-white text-center">
          {count}
        </span>
        <button 
          className={`px-3 py-1 border border-amber-300 rounded-r ${count >= stock ? 'bg-amber-100 text-amber-400' : 'bg-white text-amber-700 hover:bg-amber-50'}`}
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      
      <button 
        className={`py-2 px-4 rounded ${stock <= 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-amber-700 hover:bg-amber-800 text-white'}`}
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCounter;