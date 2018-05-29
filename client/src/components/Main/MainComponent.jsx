import React, { Component } from 'react';
import Header from '../Header/HeaderComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';
import PopularCategories from '../PopularCategories/PopularCategoriesComponent';

class MainComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Characteristics />
                <PopularCategories />                        
            </React.Fragment>            
        );
    }
}

export default MainComponent;