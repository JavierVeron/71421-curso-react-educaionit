import NavBar from './Clase4/NavBar'
import { Routes, Route, useRoutes } from "react-router-dom";
import Productos from './Clase4/Productos';
import Producto from './Clase4/Producto';
import ProductosFiltro from './Clase4/ProductosFiltro';

function App() {
  /* let routes = useRoutes([
    {path:"/", element:<Productos />},
    {path:"/categoria/:id", element:<Productos />},
    {path:"/producto/:id", element:<Producto />}
  ]); */

  return (
    <>
      <NavBar />
      {/* {routes} */}
      <Routes>
        <Route path={"/"} element={<Productos />} /> 
        <Route path={"/buscar"} element={<ProductosFiltro />} />
        <Route path={"/categoria/:id"} element={<Productos />} />
        <Route path={"/producto/:id"} element={<Producto />} /> 
      </Routes>
    </>
  )
}

export default App
