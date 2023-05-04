/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }


        const handleGithubSignIn = () => {
            signInWithPopup(auth, githubProvider)
            .then(result => {
const loggedUser = result.user;
setUser(loggedUser);
            })
            .catch(error => {
console.log(error);
            })

        }
       
    
    return (
        <div>
            <h4>login with</h4>
            
            <Button variant="outline-primary" onClick={handleGoogleSignIn}className="mb-2"><FaGoogle /> login with Google</Button>

      <Button variant="outline-secondary" onClick={handleGithubSignIn}><FaGithub />login with Github</Button>
      
        </div>
    );
};

export default Login;