import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import { mockProducts, getProducts, getProductsByCategory } from './services/mockProducts';
import './index.css';

function App() {
  // Estados para controlar la navegación y datos
  const [view, setView] = useState('home');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Efecto para cargar productos
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let data;
        if (currentCategory) {
          data = await getProductsByCategory(currentCategory);
        } else {
          data = await getProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [currentCategory]);

  // Funciones de navegación
  const navigateToHome = () => {
    setCurrentCategory(null);
    setView('home');
  };

  const navigateToCategory = (category) => {
    setCurrentCategory(category);
    setView(category);
  };

  const navigateToProductDetail = (productId) => {
    if (productId !== undefined) {
      const product = mockProducts.find(p => p.id === productId);
      setSelectedProduct(product);
      setView('detail');
    }
  };

  const navigateToCart = () => {
    setView('cart');
  };

  // Función para agregar al carrito
  const handleAddToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Componente Loading interno
  const Loading = () => (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-300 border-t-amber-600 mb-4"></div>
      <p className="text-amber-800">Cargando productos...</p>
    </div>
  );

  // Manejador de la vista actual
  const renderCurrentView = () => {
    if (loading && (view === 'molido' || view === 'grano' || view === 'accesorios')) {
      return <Loading />;
    }

    if (view === 'home') {
      return <Home navigateToCategory={navigateToCategory} />;
    }

    if (view === 'molido' || view === 'grano' || view === 'accesorios') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-900">
            {view === 'molido' 
              ? 'Café Molido' 
              : view === 'grano' 
                ? 'Café en Grano' 
                : 'Accesorios para Café'}
          </h2>
          <ItemList 
            products={products} 
            navigateToProductDetail={navigateToProductDetail} 
          />
        </>
      );
    }

    if (view === 'detail') {
      if (loading) {
        return <Loading />;
      }
      return (
        <ItemDetail 
          product={selectedProduct} 
          handleAddToCart={handleAddToCart}
          navigateToHome={navigateToHome}
          navigateToCart={navigateToCart}
        />
      );
    }

    if (view === 'cart') {
      return <Cart cart={cart} navigateToHome={navigateToHome} />;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Navbar 
        view={view} 
        navigateToHome={navigateToHome} 
        navigateToCategory={navigateToCategory} 
        navigateToCart={navigateToCart}
        cart={cart}
      />
      <main className="container mx-auto py-8 px-4 flex-grow">
        {renderCurrentView()}
      </main>
      <footer className="bg-amber-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>Cafe Catalino &copy; {new Date().getFullYear()} - El mejor café para tus sentidos</p>
        </div>
      </footer>
    </div>
  );
}

export default App;