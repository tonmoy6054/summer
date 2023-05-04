/* eslint-disable no-unused-vars */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <h4>Find us on</h4>
            <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>twiteer</ListGroup.Item>
      
    </ListGroup>
        </div>
    );
};

export default Footer;