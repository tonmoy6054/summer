/* eslint-disable no-unused-vars */
import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>

         
        <Footer></Footer>
        </div>
    );
};

export default Main;