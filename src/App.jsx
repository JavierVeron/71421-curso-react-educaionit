import './estilos.css'
import Subtitulo from './Clase2/Subtitulo'
import Titulo from './Clase2/Titulo'
import Estados from './Clase2/Estados'
import Eventos from './Clase2/Eventos'
import CiclosDeVida from './Clase2/CiclosDeVida'
import { useState } from 'react'
import Fetch from './Clase2/Fetch'
import User from './Clase2/Desafio2/User'

function App() {
  const [visible, setVisible] = useState(true);

  const quitarComponente = () => {
    setVisible(false)
  }

  return (
    <div>
      {/* <Titulo modoDark={false}>
        <h1>Educación IT</h1>
      </Titulo> */}
      {/* <Subtitulo>
        <h3>Curso de React JS</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet, quidem nostrum modi fugiat, iusto reiciendis voluptatibus, laboriosam iste iure inventore hic! Voluptas magnam, reiciendis consequatur commodi fuga cumque nam.</p>
      </Subtitulo> */}
      {/* <Estados /> */}
      {/* <Eventos /> */}
      {/* {visible ? <CiclosDeVida /> : ""}
      <button className="btn btn-secondary" onClick={quitarComponente}>Quitar Componente</button> */}
      {/* <Fetch /> */}
      <User id={6} />
    </div>
  )
}

export default App
