import React from 'react';
import {  AuthRouters } from './AuthRouters';
import { JournalScreen } from '../components/journal/JournalScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export const AppRouters = () => {
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
