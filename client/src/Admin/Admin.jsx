import React, { Component } from 'react';
import { BrowserRouter as Link ,Route, HashRouter, Switch } from 'react-router-dom';
import MainComponent from '../components/Main/MainComponent';
import AdminComponent from './AdminComponent';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        fetch("/product/admin", {
          method: "GET",
          headers: {    
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((json) => {
            this.setState({ list: json });
            console.log(this.state.list);
          });
    }

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