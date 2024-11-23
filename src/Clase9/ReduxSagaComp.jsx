import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import UsersReducer from "./reducers/UsersReducer"
import { useEffect, useState } from "react";

//const sagaMiddleware = createSagaMiddleware();
//const store = createStore(UsersReducer, applyMiddleware(sagaMiddleware));
const store = createStore(UsersReducer);
//sagaMiddleware.run();

const ReduxSagaComp = () => {
    const [usuarios, setUsuarios] = useState([]);
    

    /* useEffect(() => {
        let arrayPrueba = [
            {id:1, name:"Prueba", username:"Prueba 2"}
        ];
        setUsuarios(arrayPrueba);
        console.log(store.getState());
        
    }, []) */
    const getAll = () => {        
        store.dispatch({type:"USER_ID", payload:1})
        console.log(store.getState());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux Saga</h1>
                    <ul>
                        {usuarios.map(item => (
                            <li key={item.id}>#{item.id} - {item.name} ({item.username})</li>
                        ))}
                    </ul>
                    <button onClick={getAll}>Obtener Todos</button>
                </div>
            </div>
        </div>
    )
}

export default ReduxSagaComp