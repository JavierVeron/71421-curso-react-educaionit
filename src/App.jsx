import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Clase8/NavBar'
import Items from "./Clase8/Items";
import Item from "./Clase8/Item";
import Cart from "./Clase8/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Items />} /> 
          <Route path={"/categoria/:id"} element={<Items />} />
          <Route path={"/producto/:id"} element={<Item />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
