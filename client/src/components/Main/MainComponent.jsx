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
const username = getFromStorage()
class MainComponent extends Component {
    constructor(props) {
        super(props);
        console.log(getFromStorage('login'));
    }

    render() {        
        return (
            
            //<HashRouter>
            <Link>
                <React.Fragment>
                
                    {/* {window.location.href != 'location' ? <Header/> : <div></div>} */}
                
                    {/* 
                    <Characteristics />                                             */}
                    {/* <div className="content"> */}
                    <Switch>
                        <Route exact path="/" render={
                            ()=>(
                                <div>
                                    
                                <Header username={this.props.username}/>
                                <Home/>
                                </div>

                            )
                        }
                        
                        />
                        <Route path="/Figures" component={Figures}/>
                        <Route path="/Electronics" component={Electronics}/>
                        <Route path="/Computers" component={Computers}/>
                        <Route path="/Appliances" component={Appliances}/>
                        <Route path="/LuggageAndTravelGear" component={LuggageAndTravelGear}/>
                        <Route path="/SportsAndOutdoors" component={SportsAndOutdoors}/>
                        <Route path="/Auction/:type/:id" component={ProductDetail}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/search/:keyword" component={Search}/>
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
            //</HashRouter>                                                                            
                                    
        );
    }
}

export default MainComponent;