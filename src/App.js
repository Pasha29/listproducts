import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import ProductBlock from './Components/ProductBlock/ProductBlock';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


let App = (props) => {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <Header />
        <Login />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
