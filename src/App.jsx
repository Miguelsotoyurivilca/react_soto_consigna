App.jsx

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Cafe Catalino, el mejor café para despertar tus sentidos!" />
    </div>
  );
}

export default App;