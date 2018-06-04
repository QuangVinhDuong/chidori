import React, { Component } from 'react';

class CharacteristicsComponent extends Component {
    render() {
        return (
            <div className="characteristics">
                <div className="container">
                    <div className="row">

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">
                            
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_1.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">
                            
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_2.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Money back guarantee</div>
                                    <div className="char_subtitle">within 5 days</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">
                            
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_3.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">
                            
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_4.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacteristicsComponent;