
import './css/App.css';
import Home from './Pages/Home.jsx';
import Footer from './Componentes/Footer.jsx';
import About from './Pages/About.jsx';
import Navegacion from './Componentes/Navegacion.jsx';
import Testimonios from './Pages/Testimonios.jsx';
import Error from './Pages/Error.jsx';  
import Formulario from './Pages/Formulario.jsx';
import Login from './Pages/Login.jsx';
import Personajes from './Pages/Personajes.jsx';
import Productos from './Pages/Productos.jsx';
import ProductosLocal from './Pages/ProductosLocal.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonios' element={<Testimonios />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos-local' element={<ProductosLocal />} />
        <Route path='/*' element={<Error />} />
      </Routes>
  

      <Footer />
    </>
  );
}
export default App;
