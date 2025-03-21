// Datos de productos para simular una API
export const mockProducts = [
    {
      id: 1,
      name: "Café Brasil Santos",
      description: "Café con notas cítricas y cuerpo medio, perfecto para espresso.",
      price: 12.99,
      stock: 15,
      image: "/assets/images/Cafe-1.jpg",
      category: "molido"
    },
    {
      id: 2,
      name: "Café Colombia Supremo",
      description: "Café aromático con notas de caramelo y chocolate.",
      price: 14.99,
      stock: 10,
      image: "/assets/images/Cativa.jpg",
      category: "molido"
    },
    {
      id: 3,
      name: "Café Etiopía Yirgacheffe",
      description: "Café de especialidad con notas florales y afrutadas.",
      price: 18.99,
      stock: 8,
      image: "/assets/images/M21.jpg",
      category: "grano"
    },
    {
      id: 4,
      name: "Cafetera Francesa",
      description: "Cafetera de émbolo para preparar café con cuerpo y sabor intenso.",
      price: 29.99,
      stock: 5,
      image: "/assets/images/M22.jpg",
      category: "accesorios"
    },
    {
      id: 5,
      name: "Molinillo Manual",
      description: "Molinillo de café con ajuste de molienda para diferentes métodos de preparación.",
      price: 24.99,
      stock: 12,
      image: "/assets/images/Milimetrica.jpg",
      category: "accesorios"
    },
    {
      id: 6,
      name: "Café Guatemala Antigua",
      description: "Café de cuerpo completo con notas de chocolate y especias.",
      price: 15.99,
      stock: 20,
      image: "/assets/images/Ulqu.jpg",
      category: "grano"
    }
  ];
  
  // Función para obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  };
  
  // Función para obtener productos por categoría
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = mockProducts.filter(product => product.category === category);
        resolve(filteredProducts);
      }, 1000);
    });
  };