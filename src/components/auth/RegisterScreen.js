import React from 'react';
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <div>
            <h1 className="auth__title" >Register</h1>

            <form>

                <label for="name" >Name</label>
                <input className="auth__input" type="text"  name="name"  placeholder="Name"/>

                <label for="password" >Password</label>
                <input className="auth__input" type="password"  name="password"  placeholder="password"/>

                <label for="confirm" >Confirm</label>
                <input className="auth__input" type="password"  name="confirm"  placeholder="Confirm Password"/>

                <button type="submit" className="btn btn-primary btn-block mb-5"  > Login </button>


                <hr />
    

                <Link to="/auth/login" className="link" >Already Register?</Link>


            </form>

        </div>
    )
}
