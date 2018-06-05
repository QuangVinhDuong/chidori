import React, { Component } from 'react';
import { timer } from '../../utils/timer'

import './custom_grid.css';

class FigureProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainObject: []
        }
    }

    componentDidMount() {
        this.getProductByID();
    }

    componentDidUpdate() {
        timer();
    }

    getProductByID() {
        const { id, type } = this.props.match.params;

        fetch('/product/getProductDetail/'+type+'/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(json => {
                this.setState({
                    mainObject: json
                });
            });
    }

    render() {
        const arr = this.state.mainObject;

        const divStyle = {
            paddingTop: '56px',
            background: '#eff6fa',
            paddingBottom: '50px',
        }

        

        return (
            <div className="box_shadow" style={divStyle}>
                <div className="container">
                {
                    arr.map((item, index) => 
                        <div className="grid-container" id="product-table">
                            
                            <div className="head" id="product-title">
                                <h2>{item.productName}</h2>
                            </div>
                            
                            <div className="left">
                                <img src={'../../'+item.productImage} alt={item.productName}/>
                            </div>
                            
                            <div className="right">
                                Test Right
                            </div>
                            
                            <div className="view-history">
                                Test View History
                            </div>

                            <div className="content">
                                <div id="product-detail">
                                    <p>Mã sản phẩm: {item.productID}</p>
                                    <p>Loại sản phẩm: {item.productType}</p>
                                </div>
                                <div id="product-description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }   
                </div>
            </div>

            // <div>
            // <h2>{item.productName}</h2>
            // <img src={'../../'+item.productImage} alt={item.productName}/>
            // <p>{item.description}</p>
            // </div>
        );
    }
}

export default FigureProduct;