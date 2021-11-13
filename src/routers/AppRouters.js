import React, { useEffect, useState } from 'react';
import {  AuthRouters } from './AuthRouters';
import { JournalScreen } from '../components/journal/JournalScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouters = () => {

    const dispatch = useDispatch( );

    const [  cheking, setCheking ] = useState( true );
    const [ isLoggedIn, setIsloggedIn ] = useState( false );

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{

            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) );
                setIsloggedIn( true );
            }else{
                setIsloggedIn( false );
            }

            setCheking( false );

        })
    }, [dispatch, setCheking, setIsloggedIn]);


    if( cheking ){
        return (
            <h1>Espere...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute path="/auth"  isAuthenticated={ isLoggedIn }  component={ AuthRouters } />

                    <PrivateRouter exact path="/" isAuthenticated={ isLoggedIn } component={ JournalScreen } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
