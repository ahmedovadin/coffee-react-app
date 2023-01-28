import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store/store';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Product from './components/Feed/Product';
// import Dialog from './components/Details/Dialog';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
            <Route path=""  element={<Home />} />
            <Route path="/feed/product" element={<Product name='drinks' />}  />
            <Route path="/details"      element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
