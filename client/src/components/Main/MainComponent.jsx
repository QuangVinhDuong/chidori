import React, { Component } from 'react';
import { BrowserRouter as Link ,Route, HashRouter, Redirect,  Switch } from 'react-router-dom';
import {getFromStorage} from '../../utils/storage';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Copyright from '../Copyright/CopyrightComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Figures from '../Categories/Figures';
import Electronics from '../Categories/Electronics';
import Computers from '../Categories/Computers';
import Appliances from '../Categories/Appliances';
import LuggageAndTravelGear from '../Categories/LuggageAndTravelGear';
import SportsAndOutdoors from '../Categories/SportsAndOutdoors';
import Search from '../Categories/Search';
import ProductDetail from '../Product/ProductDetail';

import './MainComStyle.css';
import AdminComponent from '../Admin/AdminComponent';
import PopularCategoriesComponent from '../PopularCategories/PopularCategoriesComponent';

const username = getFromStorage('login').username;
const PrivateRoute = ({ component: Component }) => (
    <Route
        render={
            (props) => (
                <React.Fragment>
                    <Header username={username}/>
                    <Characteristics />
                    <Component {...props} />
                    <Footer />
                    <Copyright />
                </React.Fragment>
            )
        }
    />
);

class MainComponent extends Component {
    constructor(props) {
        super(props);
        console.log(getFromStorage('login'));
        
    }
    
    render() {
        return (
            <Link>
                <React.Fragment>
                    {/* 
                    <Characteristics />                                             */}
                    {/* <div className="content"> */}
                    <Switch>
                        {/* <Route exact path="/" render={
                            ()=>(
                                <div>
                                    
                                    <Header username={this.props.username}/>
                                    <Home/>
                                </div>
                            )
                        }
                        
                        /> */}
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/Figures" component={Figures}/>
                        <PrivateRoute path="/Electronics" component={Electronics}/>
                        <PrivateRoute path="/Computers" component={Computers}/>
                        <PrivateRoute path="/Appliances" component={Appliances}/>
                        <PrivateRoute path="/LuggageAndTravelGear" component={LuggageAndTravelGear}/>
                        <PrivateRoute path="/SportsAndOutdoors" component={SportsAndOutdoors}/>
                        <PrivateRoute path="/Auction/:type/:id" component={ProductDetail}/>
                        <PrivateRoute path="/profile" component={Profile}/>
                        <PrivateRoute path="/search/:keyword" component={Search}/>
                        <Route path="/admin"
                            render={
                                () => (
                                    getFromStorage('login').type == 0 ? <AdminComponent/> : <div>Blocked</div>
                                )
                            }
                        
                        />
                    </Switch> 
                    {/* <Footer />
                    <Copyright /> */}
                </React.Fragment>
            </Link>              
        );
    }
}

export default MainComponent;