/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub,FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div>
            <h4>login with</h4>
            <Button variant="outline-primary" className="mb-2"><FaGoogle /> login with Google</Button>
      <Button variant="outline-secondary"><FaGithub />login with Github</Button>
        </div>
    );
};

export default Login;