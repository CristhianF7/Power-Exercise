import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from './App';

export default class RouteComponent extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path={"/power/:number?"} component={App} />
                    <Redirect to={"/power/"} />
                </div>
            </Router>
        )
    }
}