import { useDispatch, useSelector } from "react-redux";
import { userFetchRequest } from "./ReduxSaga/actions";
import { useEffect } from "react";

const Users = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(userFetchRequest());       
    }, [dispatch])

    if (loading) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

    if (error) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">
                            <p>Error! No se pudo cagar la API de Usuarios!</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group list-group-flush">
                        {
                            users.map(item => (
                                <li key={item.id} className="list-group-item">{item.id + "- " + item.name + " (" + item.username + ")"}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Users