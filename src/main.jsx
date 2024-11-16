import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore } from 'redux';
import cartReducer from './Clase8/redux/cartReducer';
import App from './App'

let store = createStore(cartReducer);

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)
