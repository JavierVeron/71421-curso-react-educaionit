import { Routes, Route } from "react-router-dom";
import NavBar from './Clase4/NavBar'
import Productos from './Clase4/Productos';
import Producto from './Clase4/Producto';
import ThemeProvider from "./Clase5/context/ThemeContext";
import Spread from "./Clase5/Spread";
import CartProvider from "./Clase5/context/CartContext";
import Usuarios from "./Clase5/Usuarios";

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Usuarios />} /> 
            <Route path={"/categoria/:id"} element={<Productos />} />
            <Route path={"/producto/:id"} element={<Producto />} /> 
          </Routes>
          {/* <Spread /> */}
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
