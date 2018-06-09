import React, { Component } from 'react';
import { BrowserRouter as Link ,Route, HashRouter, Switch } from 'react-router-dom';
import MainComponent from '../Main/MainComponent';
import AdminComponent from './AdminComponent';
import './assets/css/light-bootstrap-dashboard.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            username: this.props.username
        }
    }
    
    render() {
        return (
            // <Link>
            //     <React.Fragment>
            //         <Switch>
            //             <Route exact path="/" component={MainComponent}/>
            //             <Route path="/admin" component={AdminComponent}/>
            //         </Switch>
            //     </React.Fragment>
            // </Link>
            <div>sadas</div>
        );
    }
}

export default Admin;