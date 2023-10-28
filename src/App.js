import './App.css';
import { Outlet } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className='my-2'>
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </>
  );
}
