import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>

            <form>

                <label for="email" >E-mail</label>
                <input  type="text"  name="email"  placeholder="correo@dom.com"/>

                <label for="password" >E-mail</label>
                <input  type="password"  name="password"  placeholder="password"/>

                <button type="submit" > Login </button>


                <hr />

                <h2>Google</h2>

            </form>

        </div>
    )
}
