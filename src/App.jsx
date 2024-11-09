import { Routes, Route } from "react-router-dom";
import NavBar from './Clase4/NavBar'
import Productos from './Clase4/Productos';
import Producto from './Clase4/Producto';
import ThemeProvider from "./Clase5/context/ThemeContext";
import CartProvider from "./Clase5/context/CartContext";
import Desafio2 from "./Clase7/Desafio/Desafio2";

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Desafio2 />} /> 
            <Route path={"/categoria/:id"} element={<Productos />} />
            <Route path={"/producto/:id"} element={<Producto />} /> 
          </Routes>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
