import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Copyright from '../Copyright/CopyrightComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import Home from '../Home/Home';
import Figures from '../Categories/Figures';
import Electronics from '../Categories/Electronics';

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
                        <Route path="/Figures" component={Figures}/>
                        <Route path="/Electronics" component={Electronics}/>
                    </div>                    
                    <Footer />
                    <Copyright />
                </React.Fragment>
            </HashRouter>                                                                            
                                    
        );
    }
}

export default MainComponent;