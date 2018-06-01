import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class MainNav extends Component {
    render() {
        return (
            <nav className="main_nav" id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            
                            <div className="main_nav_content d-flex flex-row">

                                {/* Categories Menu */}

                                {/* <div className="cat_menu_container" data-toggle="dropdown">
                                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                        <div className="cat_burger"><span></span><span></span><span></span></div>
                                        <div className="cat_menu_text">Các loại sản phẩm</div>
                                    </div>
                                    <div className="dropdown-menu non-border">
                                        <ul className="cat_menu">
                                            <li><a href="#">Computers & Laptops <i className="fas fa-chevron-right ml-auto"></i></a></li>
                                            <li><a href="#">Cameras & Photos<i className="fas fa-chevron-right"></i></a></li>
                                            <li className="hassubs">
                                                <a href="#">Hardware<i className="fas fa-chevron-right"></i></a>
                                                <ul>
                                                    <li className="hassubs">
                                                        <a href="#">Menu Item<i className="fas fa-chevron-right"></i></a>
                                                        <ul>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Smartphones & Tablets<i className="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">TV & Audio<i className="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Gadgets<i className="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Car Electronics<i className="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Video Games & Consoles<i className="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Accessories<i className="fas fa-chevron-right"></i></a></li>
                                        </ul>
                                    </div>                                
                                </div> */}

                                {/* Main Nav Menu */}

                                <div className="main_nav_menu ml-auto">
                                    <ul className="standard_dropdown main_nav_dropdown">
                                        {/* <li><a href="home.html">Trang chủ<i className="fas fa-chevron-down"></i></a></li> */}
                                        <li><NavLink to="/"><i className="fas fa-chevron-down"></i>Trang chủ</NavLink></li>
                                        <li><NavLink to="/Figures">Figures</NavLink></li>
                                        <li><NavLink to="/Electronics">Electronics</NavLink></li>
                                        {/* <li className="hassubs">
                                            <a href="#">Item 1<i className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="hassubs">
                                            <a href="#">Item 2<i className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="hassubs">
                                            <a href="#">Pages<i className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="index.html">Landing page<i className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="profile.html">Profile<i className="fas fa-chevron-down"></i></a></li>                                            
                                                <li><a href="product.html">Product<i className="fas fa-chevron-down"></i></a></li>                                            
                                                <li><a href="cart.html">Cart<i className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </div>

                                {/* Menu Trigger */}

                                <div className="menu_trigger_container ml-auto">
                                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div className="menu_burger">
                                            <div className="menu_trigger_text">menu</div>
                                            <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;