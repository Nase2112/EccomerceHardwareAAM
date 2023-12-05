
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import "./App.css";
import FormatoPagina from './Components/FormatoPagina';
import { ProductsContextProvider } from './Context/ProductContext';
import Contactanos from './Pages/Contactanos';
import Carro from './Pages/Carro';
import Producto from './Pages/Producto'
import Soporte from './Pages/Soporte'
function App() {


  return (

    <BrowserRouter>
    <ProductsContextProvider>

   
    <Routes>
        <Route path='/' element={<Home/>}></Route>
   
        <Route path='/CarritoInfo' element={<Carro/>}> </Route>
        <Route path='/formato' element={<FormatoPagina/>}> </Route>
        <Route path='/producto/:id' element={<Producto/>}> </Route>
        <Route path='/*' element={<h3>error404</h3>}> </Route>
        <Route path='/contacto' element={<Contactanos/>}> </Route>
      <Route path='/ayuda' element={<Soporte/>}> </Route>
       
      </Routes>

      </ProductsContextProvider>
    </BrowserRouter>

  );
}

export default App;
