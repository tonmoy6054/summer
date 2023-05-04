/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const Register = (event) => {
    const [email, setEmail] = useState('');
    // console.log(event.target);
    
    
    const handleEmailChange = () => {

    }
    return (
        <div>
            <form>
                <input onChange={handleEmailChange} type="email" name="name" id="" placeholder='Your Name'/>
                <br></br>
                <input type="email" name="email" id="email" placeholder='Your Email'/>
                <br></br>
                <input type="password" name="password" id="" placeholder='Your password'/>
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;