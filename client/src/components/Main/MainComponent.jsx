import React, { Component } from 'react';

import Header from '../Header/HeaderComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import PopularCategories from '../PopularCategories/PopularCategoriesComponent';
import BestSeller from '../BestSeller/BestSellerComponent';
import Footer from '../Footer/FooterComponent';
import Copyright from '../Copyright/CopyrightComponent';

class MainComponent extends Component {
    render() {        
        return (
            <React.Fragment>
                <Header />
                <Characteristics />
                <PopularCategories />
                <BestSeller />
                <Footer />
                <Copyright />
            </React.Fragment>            
        );
    }
}

export default MainComponent;