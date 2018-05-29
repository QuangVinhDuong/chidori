import React, { Component } from 'react';

class HeaderMain extends Component {
    render() {
        return(
            <div class="header_main">
                <div class="container">
                    <div class="row">

                        { /*Logo*/ }
                        <div class="col-lg-2 col-sm-3 col-3 order-1">
                            <div class="logo_container">
                                <div class="logo"><a href="home.html">Chidori</a></div>
                            </div>
                        </div>

                        { /*Search*/ }
                        <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                            <div class="header_search">
                                <div class="header_search_content">
                                    <div class="header_search_form_container">
                                        <form action="#" class="header_search_form clearfix">
                                            <input type="search" required="required" class="header_search_input" placeholder="Tìm sản phẩm..."/>
                                            <div class="custom_dropdown">
                                                <div class="custom_dropdown_list">
                                                    <span class="custom_dropdown_placeholder clc">Mọi loại sản phẩm</span>
                                                    <i class="fas fa-chevron-down"></i>
                                                    <ul class="custom_list clc">
                                                        <li><a class="clc" href="#">Mọi loại sản phẩm</a></li>
                                                        <li><a class="clc" href="#">SP1</a></li>
                                                        <li><a class="clc" href="#">SP2</a></li>
                                                        <li><a class="clc" href="#">SP3</a></li>
                                                        <li><a class="clc" href="#">SP4</a></li>
                                                        <li><a class="clc" href="#">SP5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button type="submit" class="header_search_button trans_300" value="Submit"><img src="images/search.png" alt=""/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        { /*Wishlist*/ }
                        <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                { /*Cart*/ }
                                <div class="cart">
                                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div class="cart_icon">
                                            <img src="images/cart.png" alt=""/>
                                            <div class="cart_count"><span>10</span></div>
                                        </div>
                                        <div class="cart_content">
                                            <div class="cart_text"><a href="#">Giỏ hàng</a></div>
                                            <div class="cart_price">69K</div>
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