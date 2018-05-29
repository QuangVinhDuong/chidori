import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt=""/></div>+84 165 554 9794</div>
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt=""/></div><a href="mailto:chidorishop@gmail.com">chidorishop@gmail.com</a></div>
                            <div className="top_bar_content ml-auto">                            
                                <div className="top_bar_user">
                                    <div className="user_icon"><img src="images/user.svg" alt=""/></div>
                                    <div><a href="#">Đăng ký</a></div>
                                    <div><a href="#">Đăng nhập</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar