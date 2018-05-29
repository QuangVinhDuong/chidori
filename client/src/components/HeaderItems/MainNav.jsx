import React, { Component } from 'react';

class MainNav extends Component {
    render() {
        return (
            <nav class="main_nav" id="navbar">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            
                            <div class="main_nav_content d-flex flex-row">

                                {/* Categories Menu */}

                                <div class="cat_menu_container" data-toggle="dropdown">
                                    <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                        <div class="cat_burger"><span></span><span></span><span></span></div>
                                        <div class="cat_menu_text">Các loại sản phẩm</div>
                                    </div>
                                    <div class="dropdown-menu non-border">
                                        <ul class="cat_menu">
                                            <li><a href="#">Computers & Laptops <i class="fas fa-chevron-right ml-auto"></i></a></li>
                                            <li><a href="#">Cameras & Photos<i class="fas fa-chevron-right"></i></a></li>
                                            <li class="hassubs">
                                                <a href="#">Hardware<i class="fas fa-chevron-right"></i></a>
                                                <ul>
                                                    <li class="hassubs">
                                                        <a href="#">Menu Item<i class="fas fa-chevron-right"></i></a>
                                                        <ul>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Smartphones & Tablets<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">TV & Audio<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Gadgets<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Car Electronics<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Video Games & Consoles<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Accessories<i class="fas fa-chevron-right"></i></a></li>
                                        </ul>
                                    </div>                                
                                </div>

                                {/* Main Nav Menu */}

                                <div class="main_nav_menu ml-auto">
                                    <ul class="standard_dropdown main_nav_dropdown">
                                        <li><a href="home.html">Trang chủ<i class="fas fa-chevron-down"></i></a></li>
                                        <li class="hassubs">
                                            <a href="#">Item 1<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Item<i class="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li class="hassubs">
                                            <a href="#">Item 2<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Item<i class="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li class="hassubs">
                                            <a href="#">Pages<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="index.html">Landing page<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="profile.html">Profile<i class="fas fa-chevron-down"></i></a></li>                                            
                                                <li><a href="product.html">Product<i class="fas fa-chevron-down"></i></a></li>                                            
                                                <li><a href="cart.html">Cart<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                {/* Menu Trigger */}

                                <div class="menu_trigger_container ml-auto">
                                    <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div class="menu_burger">
                                            <div class="menu_trigger_text">menu</div>
                                            <div class="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
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