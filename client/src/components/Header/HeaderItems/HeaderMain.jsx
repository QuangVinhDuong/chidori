import React, { Component } from 'react';

class HeaderMain extends Component {
    render() {
        return(
            <div className="header_main">
                <div className="container">
                    <div className="row">

                        { /*Logo*/ }
                        <div className="col-lg-2 col-sm-3 col-3 order-1">
                            <div className="logo_container">
                                <div className="logo"><a href="home.html">Chidori</a></div>
                            </div>
                        </div>

                        { /*Search*/ }
                        <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                            <div className="header_search">
                                <div className="header_search_content">
                                    <div className="header_search_form_container">
                                        <form action="#" className="header_search_form clearfix">
                                            <input type="search" required="required" className="header_search_input" placeholder="Tìm sản phẩm..."/>
                                            <div className="custom_dropdown">
                                                <div className="custom_dropdown_list">
                                                    <span className="custom_dropdown_placeholder clc">Mọi loại sản phẩm</span>
                                                    <i className="fas fa-chevron-down"></i>
                                                    <ul className="custom_list clc">
                                                        <li><a className="clc" href="#">Mọi loại sản phẩm</a></li>
                                                        <li><a className="clc" href="#">SP1</a></li>
                                                        <li><a className="clc" href="#">SP2</a></li>
                                                        <li><a className="clc" href="#">SP3</a></li>
                                                        <li><a className="clc" href="#">SP4</a></li>
                                                        <li><a className="clc" href="#">SP5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt=""/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        { /*Wishlist*/ }
                        <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                { /*Cart*/ }
                                <div className="cart">
                                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div className="cart_icon">
                                            <img src="images/cart.png" alt=""/>
                                            <div className="cart_count"><span>10</span></div>
                                        </div>
                                        <div className="cart_content">
                                            <div className="cart_text"><a href="#">Giỏ hàng</a></div>
                                            <div className="cart_price">69K</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMain;