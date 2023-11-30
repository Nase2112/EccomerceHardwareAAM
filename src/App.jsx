
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import "./App.css";
import FormatoPagina from './Components/FormatoPagina';
import { ProductsContextProvider } from './Context/ProductContext';
function App() {


  return (

    <BrowserRouter>
    <ProductsContextProvider>

   
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/*' element={<h3>error404</h3>}> </Route>
        <Route path='/formato' element={<FormatoPagina/>}> </Route>
      </Routes>

      </ProductsContextProvider>
    </BrowserRouter>

  );
}

export default App;
