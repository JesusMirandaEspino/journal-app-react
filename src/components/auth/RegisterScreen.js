import React from 'react';
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';


export const RegisterScreen = () => {

    const dispatch = useDispatch( );

    const [ formValues, handleInputChange ] = useForm({
        name: 'Jesus',
        email: 'correo@gmail.com',
        password: '123456',
        password2: '123456'
    });


    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormvalid() ){
            console.log( 'Formulario correcto' );
        }
    }


    const isFormvalid = () => {

        if( name.trim().length === 0 ){
            dispatch(   setError('Name is required') );
            return false;
        }else if(  !validator.isEmail( email ) ){
            dispatch( setError('Email is wrong') );
            return false;
        }else if( password !== password2  && password.length < 5 ){
            dispatch( setError('The password is wrong') );
            return false;
        }

        dispatch( removeError() )
        return true;

    }


    return (
        <div>
            <h1 className="auth__title" >Register</h1>

            <form onSubmit={ handleRegister } >

                <div className="auth__alert_error" >
                
                    <p>Error en el formulario</p>

                </div>

                <label htmlFor="name" >Name</label>
                <input className="auth__input" type="text"  name="name"  placeholder="Name" value={ name  }  onChange={ handleInputChange } />

                <label htmlFor="email" >Email</label>
                <input className="auth__input" type="email"  name="email"  placeholder="email" value={ email }  onChange={ handleInputChange } />

                <label htmlFor="password" >Password</label>
                <input className="auth__input" type="password"  name="password"  placeholder="password" value={ password }  onChange={ handleInputChange } />

                <label htmlFor="confirm" >Confirm</label>
                <input className="auth__input" type="password"  name="confirm"  placeholder="Confirm Password" value={  password2 }  onChange={ handleInputChange } />

                <button type="submit" className="btn btn-primary btn-block mb-5"  > Login </button>


                <hr />
    

                <Link to="/auth/login" className="link" >Already Register?</Link>


            </form>

        </div>
    )
}
