import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import ProductBlock from './Components/ProductBlock/ProductBlock';

let App = (props) => {
  console.log('App props');
  console.dir(props);
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
        {/* <ProductBlock /> */}
      </div>
    </Provider>
  );
}

export default App;
