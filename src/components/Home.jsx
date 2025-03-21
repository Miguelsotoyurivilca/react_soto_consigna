import React from 'react';

const Home = ({ navigateToCategory }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">¡Bienvenido a Cafe Catalino, el mejor café para despertar tus sentidos!</h1>
      <p className="text-xl text-amber-800 mb-12">Pronto verás aquí nuestro catálogo de productos de café.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigateToCategory('molido')}>
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Café Molido</h3>
          <p className="text-amber-700">Descubre nuestras mezclas de café molido, listas para preparar.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigateToCategory('grano')}>
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Café en Grano</h3>
          <p className="text-amber-700">Granos seleccionados para los paladares más exigentes.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigateToCategory('accesorios')}>
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Accesorios</h3>
          <p className="text-amber-700">Todo lo que necesitas para preparar el café perfecto.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;