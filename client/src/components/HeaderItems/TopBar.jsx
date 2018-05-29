import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <div class="top_bar">
                <div class="container">
                    <div class="row">
                        <div class="col d-flex flex-row">
                            <div class="top_bar_contact_item"><div class="top_bar_icon"><img src="images/phone.png" alt=""/></div>+84 165 554 9794</div>
                            <div class="top_bar_contact_item"><div class="top_bar_icon"><img src="images/mail.png" alt=""/></div><a href="mailto:chidorishop@gmail.com">chidorishop@gmail.com</a></div>
                            <div class="top_bar_content ml-auto">                            
                                <div class="top_bar_user">
                                    <div class="user_icon"><img src="images/user.svg" alt=""/></div>
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