import { Routes, Route } from "react-router-dom";
import NavBar from './Clase4/NavBar'
import Productos from './Clase4/Productos';
import Producto from './Clase4/Producto';
import ThemeProvider from "./Clase5/context/ThemeContext";
import CartProvider from "./Clase5/context/CartContext";
import APIAxios from "./Clase6/APIAxios";

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<APIAxios />} /> 
            <Route path={"/categoria/:id"} element={<Productos />} />
            <Route path={"/producto/:id"} element={<Producto />} /> 
          </Routes>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
