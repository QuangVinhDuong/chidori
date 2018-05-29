import React, { Component } from 'react';
import Header from '../Header/HeaderComponent';
import Characteristics from '../Characteristics/CharacteristicsComponent';

class MainComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Characteristics />                        
            </React.Fragment>            
        );
    }
}

export default MainComponent;