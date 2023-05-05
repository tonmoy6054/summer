/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Categories from '../../Categories/Categories';
import './Header.css'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
     <nav>
<h1 className='m-3 font-bold fs-1 fw-bold text-center fst-italic'>The Hunter Chef Cookbook</h1>
<Link to="/">Home</Link>
<Link to="/blogs">Blogs</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
 </nav>
 

)}

export default Header;