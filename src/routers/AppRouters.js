import React from 'react';
import {  AuthRouters } from './AuthRouters';
import { JournalScreen } from '../components/journal/JournalScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export const AppRouters = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/auth"  component={ AuthRouters } />
                    <Route exact path="/"  component={ JournalScreen } />

                </Switch>
            </div>
        </Router>
    )
}
