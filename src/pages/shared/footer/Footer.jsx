/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './footer.css';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <h4>Find us on</h4>
            <ListGroup className='footerList'>
      <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>twiteer</ListGroup.Item>
      
    </ListGroup>
    
        </div>
    );
};

export default Footer;