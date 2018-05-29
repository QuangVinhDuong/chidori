import React, { Component } from 'react';
import Header from '../Header/HeaderComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import PopularCategories from '../PopularCategories/PopularCategoriesComponent';
import BestSeller from '../BestSeller/BestSellerComponent';

class MainComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Characteristics />
                <PopularCategories />
                <BestSeller />
            </React.Fragment>            
        );
    }
}

export default MainComponent;