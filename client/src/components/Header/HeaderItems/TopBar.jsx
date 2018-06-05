import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './TopBar.css'
import { getFromStorage, removeFromStorage } from '../../../utils/storage';


class TopBar extends Component {
        constructor(props) {
            super(props);   
            

        this.onLogOut = this.onLogOut.bind(this);
    }


    onLogOut() {
        // Main quest
        // clear local storage
        // set isDeleted in UserSession Schema to true
        const obj = getFromStorage('login');

        if (obj && obj.token_key) {
            const { token_key } = obj;
            fetch('/account/logout?token=' + token_key)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {   
                        removeFromStorage('login');
                        window.location.reload();
                    }
                });                        
        }        
    }
    
    render() {

        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt=""/></div>+84 165 554 9794</div>
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt=""/></div><a href="mailto:chidorishop@gmail.com">chidorishop@gmail.com</a></div>
                            
                            <div className="top_bar_content ml-auto">   
                                <div class="btn-group" id="account">
                                    <button type="button" id="btn1" className="btn btn-primary"><i class="fa fa-user"></i>  {this.props.username}</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu">
                                    
                                        <button className="btn btn-primary account" type="button">
                                            <NavLink to="/profile"><b>Tài khoản</b></NavLink>
                                        </button>
                                        <div class="dropdown-divider"></div>
                                        <button className="btn btn-primary account" onClick={this.onLogOut}><b>Đăng xuất</b></button>
                                        {/* <a class="dropdown-item" href="#">Đăng xuất</a> */}
                                    </div>
                                </div>                              
                                {/* <div className="top_bar_user">
                                    <div className="user_icon"><img src="images/user.svg" alt=""/></div>
                                    <div><button className="btn btnPrimary" type="button">{this.props.username}</button></div>
                                    <div><button className="btn btnPrimary" onClick={this.onLogOut}>Thoát</button></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar