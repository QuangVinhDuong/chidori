import React, { Component } from 'react';
import { BrowserRouter as Link ,Route, HashRouter, Switch } from 'react-router-dom';

import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Copyright from '../Copyright/CopyrightComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import Home from '../Home/Home';

import Figures from '../Categories/Figures';
import Electronics from '../Categories/Electronics';
import Computers from '../Categories/Computers';
import Appliances from '../Categories/Appliances';
import LuggageAndTravelGear from '../Categories/LuggageAndTravelGear';
import SportsAndOutdoors from '../Categories/SportsAndOutdoors';

import ProductDetail from '../Product/ProductDetail';

import './MainComStyle.css';

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {        
        return (
            
            //<HashRouter>
            <Link>
                <React.Fragment>
                    <Header username={this.props.username} />
                    <Characteristics />                                            
                    {/* <div className="content"> */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Figures" component={Figures}/>
                        <Route path="/Electronics" component={Electronics}/>
                        <Route path="/Computers" component={Computers}/>
                        <Route path="/Appliances" component={Appliances}/>
                        <Route path="/LuggageAndTravelGear" component={LuggageAndTravelGear}/>
                        <Route path="/SportsAndOutdoors" component={SportsAndOutdoors}/>
                        <Route path="/Auction/:type/:id" component={ProductDetail}/>
                    </Switch>
                    {/* </div>                     */}
                    <Footer />
                    <Copyright />
                </React.Fragment>
            </Link>
            //</HashRouter>                                                                            
                                    
        );
    }
}

export default MainComponent;