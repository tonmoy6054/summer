/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const Register = (event) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    // console.log(event.target);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(email, password, name);
        if(password < 6){
            setError('password must be six characters')
        }


    }

   
    
    const handleEmailChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }
    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" id="" placeholder='Your Name'/>
                <br></br>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br></br>
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input type="submit" value="register" />
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Register;