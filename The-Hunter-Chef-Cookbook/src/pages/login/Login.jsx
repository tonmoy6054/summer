/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error.message);
        })
       
    }
    return (
        <div>
            <h4>login with</h4>
            <Button variant="outline-primary" onClick={handleGoogleSignIn}className="mb-2"><FaGoogle /> login with Google</Button>
      <Button variant="outline-secondary"><FaGithub />login with Github</Button>
        </div>
    );
};

export default Login;