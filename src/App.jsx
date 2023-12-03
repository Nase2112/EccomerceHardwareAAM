
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import "./App.css";
import FormatoPagina from './Components/FormatoPagina';
import { ProductsContextProvider } from './Context/ProductContext';
import Contacto from './Pages/Contacto';
import Carro from './Pages/Carro';
import Producto from './Pages/Producto'
function App() {


  return (

    <BrowserRouter>
    <ProductsContextProvider>

   
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto/>}> </Route>
        <Route path='/CarritoInfo' element={<Carro/>}> </Route>
        <Route path='/formato' element={<FormatoPagina/>}> </Route>
        <Route path='/producto/:id' element={<Producto/>}> </Route>
        <Route path='/*' element={<h3>error404</h3>}> </Route>
       
      </Routes>

      </ProductsContextProvider>
    </BrowserRouter>

  );
}

export default App;
