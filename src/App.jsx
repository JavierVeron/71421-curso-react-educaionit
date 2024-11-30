import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Clase4/NavBar'
//import Items from "./Clase8/Items";
//import Item from "./Clase8/Item";
//import Cart from "./Clase8/Cart";
import Productos from "./Clase4/Productos";
import Producto from "./Clase4/Producto";
import CartProvider from "./Clase5/context/CartContext";
import Carrito from "./Clase5/Carrito";
import ThemeProvider from "./Clase5/context/ThemeContext";
/* import Users from "./Clase10/Users"; */

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={"/"} element={<Productos />} /> 
              <Route path={"/categoria/:id"} element={<Productos />} />
              <Route path={"/producto/:id"} element={<Producto />} />
              <Route path={"/cart"} element={<Carrito />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
