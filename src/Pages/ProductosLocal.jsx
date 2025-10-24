import React from 'react';
import ProductosCard from '../Componentes/ProductosCard.jsx';
import productosData from '../data/productos.json';
import data from '../data/data.json';

const ProductosLocal = () => {

  // Helper: intentar resolver la imagen a partir del nombre de archivo en src/assets


  // Mapeamos los productos locales al formato que espera ProductosCard
  const productos = productosData.map(p => ({
    id: p.id,
    title: p.nombre,
    description: p.descripcion,
    price: p.precio,
    thumbnail: p.imagen,
    stock: p.stock,
    categoria: p.categoria,
    rating: p.rating,
    destacado: p.destacado
  }));

  const estilos = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    flexWrap: 'wrap',
    gap: '20px'
  };

  return (
    <div>
      <h1 className='text-center mt-5'>{data.titulo} (Local)</h1>

      <div style={estilos}>
        {productos.map(producto => (
          <div key={producto.id}>
            <ProductosCard productos={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosLocal;
