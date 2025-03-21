import React from 'react';

const Navbar = ({ view, navigateToHome, navigateToCategory, navigateToCart, cart }) => {
  return (
    <nav className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/assets/images/icons8-coffee-50.png" alt="Logo" className="mr-2 rounded-full" />
          <h1 className="text-2xl font-bold cursor-pointer" onClick={navigateToHome}>Cafe Catalino</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <span 
            className={`cursor-pointer hover:text-amber-200 ${view === 'home' ? 'text-amber-200 font-bold' : ''}`} 
            onClick={navigateToHome}
          >
            Inicio
          </span>
          <span 
            className={`cursor-pointer hover:text-amber-200 ${view === 'molido' ? 'text-amber-200 font-bold' : ''}`} 
            onClick={() => navigateToCategory('molido')}
          >
            Café molido
          </span>
          <span 
            className={`cursor-pointer hover:text-amber-200 ${view === 'grano' ? 'text-amber-200 font-bold' : ''}`} 
            onClick={() => navigateToCategory('grano')}
          >
            Café en grano
          </span>
          <span 
            className={`cursor-pointer hover:text-amber-200 ${view === 'accesorios' ? 'text-amber-200 font-bold' : ''}`} 
            onClick={() => navigateToCategory('accesorios')}
          >
            Accesorios
          </span>
          <span 
            className="cursor-pointer hover:text-amber-200 relative" 
            onClick={navigateToCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + (item.quantity || 0), 0)}
              </span>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;