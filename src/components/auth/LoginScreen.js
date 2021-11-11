import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailpassword, startGoogleLogin } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'mail@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailpassword( email, password ) );
    }


    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <div>
            <h1 className="auth__title" >LoginScreen</h1>

            <form onSubmit={ handleLogin } >

                <label for="email" >E-mail</label>
                <input className="auth__input" type="text"  name="email"  placeholder="correo@dom.com" value={ email } onChange={ handleInputChange } />

                <label for="password" >Password</label>
                <input className="auth__input" type="password"  name="password"  placeholder="password"  value={ password } onChange={ handleInputChange } />

                <button type="submit" className="btn btn-primary btn-block" disabled={ loading } > Login </button>


                <hr />
                
                <div  className="auth__social_network" >
                    <h2>Login With Social Network</h2>

                        <div 
                            className="google-btn"  onClick={   handleGoogleLogin } >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                </div>


                <Link to="/auth/register" className="link" >Create new account</Link>


            </form>

        </div>
    )
}
