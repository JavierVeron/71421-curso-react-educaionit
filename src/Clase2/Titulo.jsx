import Descripcion from "./Descripcion";
import Descripcion2 from "./Descripcion2";

const Titulo = (props) => {
    return (
        <>
            {props.children}
            <Descripcion texto={"En el Curso de React JS aprenderemos a crear Aplicaciones desde 0"} precio={100000} duracion={"12 semanas"} modoDark={props.modoDark}  />
            <Descripcion2 texto={"En el Curso de React JS aprenderemos a crear Aplicaciones desde 0"} precio={100000} duracion={"12 semanas"} modoDark={props.modoDark} />
        </>
    )
}

export default Titulo