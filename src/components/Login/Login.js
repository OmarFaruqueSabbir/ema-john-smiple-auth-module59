import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();

    const emailBlur = event =>{
        setEmail(event.target.value);
    }
    const passwordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }
    const handleSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={emailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>
                            Loading...
                        </p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                   New To Ema-John? <Link className="form-link" to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;