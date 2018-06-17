import React, { Component } from 'react';
import { BrowserRouter as Link ,Route,  Switch } from 'react-router-dom';
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

const UserRoute = (Component, Username, Type) => {	
	return (	
						
		(props) => (
			<React.Fragment>
				<Header username={Username} type={Type}/>
				<Characteristics />
				<Component {...props}/>
				<Footer />
				<Copyright />
			</React.Fragment>
		)
		
	)
};

const AdminRoute = ({ component: Component, username: Username, type: Type}) => (
	<Route
		render={
			(props) => (
				Type === 0 ? (
					<Component username={Username} {...props}/>
				) : (
					<ErrorComponent message="Đây là khu vực của admin, bạn không được phép truy cập!"/>
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
				"Authorization": `Bearer ${access_token}`
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
		const type = this.state.accountType;
		const username = this.props.username;        
		return( 
		<Link>
			<React.Fragment>
				<Switch>
					<Route exact path="/" render={UserRoute(Home, username, type)} />
					<Route path="/profile" render={UserRoute(Profile, username, type)} />
					<Route path="/Figures" render={UserRoute(Figures, username, type)} />
					<Route path="/Electronics" render={UserRoute(Electronics, username, type)} />
					<Route path="/Computers" render={UserRoute(Computers, username, type)} />
					<Route path="/Appliances" render={UserRoute(Appliances, username, type)} />
					<Route path="/LuggageAndTravelGear" render={UserRoute(LuggageAndTravelGear, username, type)} />
					<Route path="/SportsAndOutdoors" render={UserRoute(SportsAndOutdoors, username, type)} />
					<Route path="/Auction/:type/:id" render={UserRoute(ProductDetail, username, type)} />
					{/* <Route path="/search/:keyword" type={t} username={u} component={Search} /> */}
					<AdminRoute path="/admin" render={UserRoute(AdminComponent, username, type)} />
					<Route path="/:wrong" component={ErrorComponent}/>
				</Switch>
			</React.Fragment>
		</Link>
		);
	}
}

export default MainComponent;