import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <p className="coming-soon">Pronto verás aquí nuestro catálogo de productos de café.</p>
    </div>
  );
};

export default ItemListContainer;