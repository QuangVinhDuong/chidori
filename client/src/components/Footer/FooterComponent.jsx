import React, {Component} from 'react';
import './FooterComponent.css';
class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo"><a role="button" href="#">Chidori</a></div>
                                </div>
                                <div className="footer_title">Got Question? Call Us 24/7</div>
                                <div className="footer_phone">+84 xxx xxx xxxx</div>
                                <div className="footer_contact_text">
                                    <p>227 Đường Nguyễn Văn Cừ</p>
                                    <p>Phường 4, Quận 5, Hồ Chí Minh</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a role="button" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a role="button" href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a role="button" href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a role="button" href="#"><i className="fab fa-google"></i></a></li>
                                        <li><a role="button" href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                    <li><a role="button" href="#">Computers & Laptops</a></li>
                                    <li><a role="button" href="#">Cameras & Photos</a></li>
                                    <li><a role="button" href="#">Hardware</a></li>
                                    <li><a role="button" href="#">Smartphones & Tablets</a></li>
                                    <li><a role="button" href="#">TV & Audio</a></li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                    <li><a role="button" href="#">Car Electronics</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                    <li><a role="button" href="#">Video Games & Consoles</a></li>
                                    <li><a role="button" href="#">Accessories</a></li>
                                    <li><a role="button" href="#">Cameras & Photos</a></li>
                                    <li><a role="button" href="#">Hardware</a></li>
                                    <li><a role="button" href="#">Computers & Laptops</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Customer Care</div>
                                <ul className="footer_list">
                                    <li><a role="button" href="#">My Account</a></li>
                                    <li><a role="button" href="#">Order Tracking</a></li>
                                    <li><a role="button" href="#">Wish List</a></li>
                                    <li><a role="button" href="#">Customer Services</a></li>
                                    <li><a role="button" href="#">Returns / Exchange</a></li>
                                    <li><a role="button" href="#">FAQs</a></li>
                                    <li><a role="button" href="#">Product Support</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;