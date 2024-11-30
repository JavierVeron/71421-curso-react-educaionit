import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App'
/* import store from './Clase10/ReduxSaga/store'; */
import { createStore } from 'redux';
import cartReducer from './Clase8/redux/cartReducer';
const store = createStore(cartReducer);

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)
