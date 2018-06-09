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
import ErrorComponent from '../404/ErrorComponent';
import './MainComStyle.css';
import AdminComponent from '../Admin/AdminComponent';
import PopularCategoriesComponent from '../PopularCategories/PopularCategoriesComponent';

const UserRoute = ({ component: Component, username: Username, type: Type }) => (
    <Route
        render={
            (props) => (
                <React.Fragment>
                    <Header username={Username} type={Type}/>
                    <Characteristics />
                    <Component {...props} />
                    <Footer />
                    <Copyright />
                </React.Fragment>
            )
        }
    />
);

const AdminRoute = ({ component: Component, username: Username, type: Type}) => (
    <Route
        render={
            (props) => (
                Type === 0 ? (
                    <Component username={Username} {...props}/>
                ) : (
                    <ErrorComponent/>
                )
            )
        }
    />
)



class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: 1
        }
        //console.log("Look there: " + this.props.username);
    } 
    componentDidMount() {
        this.getType();
    }

    getType() {
        const obj = getFromStorage('login');

        if (obj && obj.access_token) {
            const { access_token } = obj;
            fetch("/account/gettype/" + this.props.username, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`
              }
            })
              .then((res) => res.json())
              .then((json) => {
                this.setState({accountType: json.acc[0].accountType._id});
                console.log(this.state.accountType);
              });
        }
    }
    
    render() {
        const t = this.state.accountType;
        const u = this.props.username;
        return <Link>
            <React.Fragment>
              <Switch>
                <UserRoute exact path="/" type={t} username={u} component={Home} />
                <UserRoute path="/profile" type={t} username={u} component={Profile} />
                <UserRoute path="/Figures" type={t} username={u} component={Figures} />
                <UserRoute path="/Electronics" type={t} username={u} component={Electronics} />
                <UserRoute path="/Computers" type={t} username={u} component={Computers} />
                <UserRoute path="/Appliances" type={t} username={u} component={Appliances} />
                <UserRoute path="/LuggageAndTravelGear" type={t} username={u} component={LuggageAndTravelGear} />
                <UserRoute path="/SportsAndOutdoors" type={t} username={u} component={SportsAndOutdoors} />
                <UserRoute path="/Auction/:type/:id" type={t} username={u} component={ProductDetail} />
                <UserRoute path="/search/:keyword" type={t} username={u} component={Search} />
                <AdminRoute path="/admin" type={t} username={u}  component={AdminComponent} />
                <Route path="/:wrong" component={ErrorComponent}/>
              </Switch>
            </React.Fragment>
          </Link>;
    }
}

export default MainComponent;