/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const Register = (event) => {
    const [email, setEmail] = useState('');
    // console.log(event.target);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(email, password, name);
    }
    
    const handleEmailChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" id="" placeholder='Your Name'/>
                <br></br>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email'/>
                <br></br>
                <input type="password" name="password" id="" placeholder='Your password'/>
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;