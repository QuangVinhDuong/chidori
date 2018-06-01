import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';

import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Copyright from '../Copyright/CopyrightComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import Home from '../Home/Home';
import DanhMuc1 from '../DanhMuc/DanhMuc1';
import DanhMuc2 from '../DanhMuc/DanhMuc2';

import './MainComStyle.css';

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {        
        return (
            
            <HashRouter>
                <React.Fragment>
                    <Header username={this.props.username} />
                    <Characteristics />                                            
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/DanhMuc1" component={DanhMuc1}/>
                        <Route path="/DanhMuc2" component={DanhMuc2}/>
                    </div>                    
                    <Footer />
                    <Copyright />
                </React.Fragment>
            </HashRouter>                                                                            
                                    
        );
    }
}

export default MainComponent;