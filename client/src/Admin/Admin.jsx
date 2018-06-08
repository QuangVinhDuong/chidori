import React, { Component } from 'react';
import { BrowserRouter as Link ,Route, HashRouter, Switch } from 'react-router-dom';
import MainComponent from '../components/Main/MainComponent';
import AdminComponent from './AdminComponent';
class Admin extends Component {
    render() {
        return (
            <Link>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={MainComponent}/>
                    <Route path="/admin" component={AdminComponent}/>
                    
                </Switch>
            </React.Fragment>
        </Link>
        );
    }
}

export default Admin;