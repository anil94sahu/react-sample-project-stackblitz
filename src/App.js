import React from 'react';
import './style.css';
import { NavBar } from './navbar';
import { Shop } from './bank';
import { Provider } from 'react-redux';
import * as store from './store/store/index';

export default function App() {
  console.log(store.store.getState());
  return (
    <div>
      <Provider store={store.store}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <NavBar />
        <Shop />
      </Provider>
    </div>
  );
}
