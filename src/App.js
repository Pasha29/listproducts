import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import ProductBlockContainer from './Components/ProductBlock/ProductBlockContainer';

let App = (props) => {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <BrowserRouter>
        <Header />
        <Route path='/' render={() => <Login />} />
        <Route path='/products' render={() => <ProductBlockContainer />} />
        <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
