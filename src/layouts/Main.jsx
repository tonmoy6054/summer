/* eslint-disable no-unused-vars */
import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import Recipies from '../pages/recipies/Recipies';


const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
<Recipies></Recipies>
         
        <Footer></Footer>
        
        </div>
    );
};

export default Main;