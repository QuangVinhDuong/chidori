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

const UserRoute = ({ component: Component }) => (
    <Route
        render={
            (props) => (
                <React.Fragment>
                    <Header username={getFromStorage('login').username}/>
                    <Characteristics />
                    <Component {...props} />
                    <Footer />
                    <Copyright />
                </React.Fragment>
            )
        }
    />
);

const AdminRoute = ({ component: Component }) => (
    <Route
        render={
            (props) => (
                getFromStorage('login').type == 0 ? (
                    <Component username={getFromStorage('login').username} {...props}/>
                ) : (
                    <Redirect to="/"/>
                )
            )
        }
    />
)



class MainComponent extends Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        return (
            <Link>
                <React.Fragment>
                    <Switch>
                        <UserRoute exact path="/" component={Home}/>
                        <UserRoute path="/Figures" component={Figures}/>
                        <UserRoute path="/Electronics" component={Electronics}/>
                        <UserRoute path="/Computers" component={Computers}/>
                        <UserRoute path="/Appliances" component={Appliances}/>
                        <UserRoute path="/LuggageAndTravelGear" component={LuggageAndTravelGear}/>
                        <UserRoute path="/SportsAndOutdoors" component={SportsAndOutdoors}/>
                        <UserRoute path="/Auction/:type/:id" component={ProductDetail}/>
                        <UserRoute path="/profile" component={Profile}/>
                        <UserRoute path="/search/:keyword" component={Search}/>
                        <AdminRoute path="/admin" component={AdminComponent}/>
                    </Switch>
                </React.Fragment>
            </Link>              
        );
    }
}

export default MainComponent;