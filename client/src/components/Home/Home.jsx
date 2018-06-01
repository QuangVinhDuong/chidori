import React, { Component } from 'react';

import Characteristics from '../Characteristics/CharacteristicsComponent';
import PopularCategories from '../PopularCategories/PopularCategoriesComponent';
import BestSeller from '../BestSeller/BestSellerComponent';


class Home extends Component {
    
    render() {
        return (
            <React.Fragment>                
                <PopularCategories />
                <BestSeller />
            </React.Fragment>
        );
    }
}

export default Home;