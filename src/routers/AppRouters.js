import React, { useEffect } from 'react';
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

export const AppRouters = () => {

    const dispatch = useDispatch( );

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{

            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) );
            }

        })
    }, [dispatch])

    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/auth"  component={ AuthRouters } />
                    <Route exact path="/"  component={ JournalScreen } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
