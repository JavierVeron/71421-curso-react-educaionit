import { actions } from "./redux/actions";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const dispatch = useDispatch(); 
    dispatch(actions.totalCarrito());
    const [total, setTotal] = useState(useSelector(state => state.total));

    useEffect(() => {
        //dispatch(actions.totalCarrito());
        //setTotal(useSelector(state => state.total));
    })

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-warning position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
            </button>
        </Link>
    )
}

export default CartWidget