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
                            
                            <div className="mx-auto left" id="product-image">
                                <img src={'../../'+item.productImage} alt={item.productName}/>
                            </div>                            

                            <div className="mx-auto right">
                                
                                <div className="panel" id="time-left-panel">
                                    <h2>Kết thúc trong</h2>
                                    <span id="isEnd"></span>
                                    <div className="bestsellers_item">
                                        <div className="deals_timer_content ml-auto">
                                            <div className="deals_timer_box clearfix" data-target-time="">
                                                <div className="deals_timer_unit">
                                                    <div id="deals_timer1_hr" className="deals_timer_hr"></div>
                                                    <span>hours</span>
                                                </div>
                                                <div className="deals_timer_unit">
                                                    <div id="deals_timer1_min" className="deals_timer_min"></div>
                                                    <span>mins</span>
                                                </div>
                                                <div className="deals_timer_unit">
                                                    <div id="deals_timer1_sec" className="deals_timer_sec"></div>
                                                    <span>secs</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel" id="current-price-panel">
                                    <h2>Giá thầu hiện tại</h2>
                                    <div id="current-price">1K</div>
                                </div>

                                <div className="panel" id="bidding-panel">
                                    <h2>Đấu giá ngay</h2>
                                    <div id="bid-box">
                                        
                                        <button id="minus" data-value="-1">-</button>
                                        <input type="text" name="bid-value" id="bid-value" value="1" data-step="4"/>
                                        <button id="plus" data-value="1">+</button>
                                        
                                    </div>
                                </div>

                            </div>
                            
                            <div className="view-history">
                                <table className="table table-striped" id="history-table">
                                    <thead>
                                        <tr>
                                            <th>Tài khoản đấu giá</th>
                                            <th>Giá dự thầu (vnd)</th>
                                            <th>Tổng giá thầu</th>
                                            <th>Thời gian đấu giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>test</td>
                                            <td>test</td>
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                        <tr>
                                            <td>test</td>
                                            <td>test</td>
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="content">
                                <div id="product-detail">
                                    <h2>Chi tiết sản phẩm</h2>
                                    <p>Mã sản phẩm: {item.productID}</p>
                                    <p>Loại sản phẩm: {item.productType}</p>
                                </div>
                                <div id="product-description">
                                    <h2>Mô tả sản phẩm</h2>
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