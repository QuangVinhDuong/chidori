import React, { Component } from 'react';
import './WelcomeComponent.css';
import "./script";

class WelcomeComponent extends Component {
    render() {
        return (
            <div className="bg">
                <div className="screen d-flex align-items-center">
                    <div className="container">
                        <div className="main">
                            <div id="title">
                                <h1>Chidori</h1>
                                <p>Chào mừng đến với dịch vụ đấu giá của chúng tôi</p>
                            </div>
                            <div id="btn-section">
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#register">Đăng ký</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#login">Đăng nhập</a>                        
                            </div>
                            <a href="home">Vào trang chủ</a>
                        </div>

                        {/* Register Modal */}
                        <div className="modal fade" id="register">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Đăng ký</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <div className="row format">
                                            <div className="col">
                                                <span>Username: </span>
                                            </div>
                                            <div className="col">
                                                <input type="text" name="username" id="reg-u-name"/>
                                            </div>
                                        </div>
                                        <div className="row format">
                                            <div className="col">
                                                <span>Password: </span>
                                            </div>
                                            <div className="col">
                                                <input type="password" name="password" id="reg-pw"/>
                                            </div>
                                        </div>
                                        <div className="row format">
                                            <div className="col">
                                                <span>Retype password: </span>
                                            </div>
                                            <div className="col">
                                                <input type="password" name="retype" id="retype"/>
                                            </div>
                                        </div>
                                        <div className="row format">
                                            <div className="col">
                                                <span>Email: </span>
                                            </div>
                                            <div className="col">
                                                <input type="email" name="email" id="email"/>
                                            </div>
                                        </div>     
                                    </div>
                                    
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                        <button type="button" className="btn btn-primary">Xác nhận</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Login Modal */}
                        <div className="modal fade" id="login">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Đăng nhập</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <div className="row format">
                                            <div className="col">
                                                <span>Username: </span>
                                            </div>
                                            <div className="col">
                                                <input type="text" name="username" id="lo-u-name"/>
                                            </div>
                                        </div>
                                        <div className="row format">
                                            <div className="col">
                                                <span>Password: </span>
                                            </div>
                                            <div className="col">
                                                <input type="password" name="password" id="lo-pw"/>
                                            </div>
                                        </div>                                     
                                    </div>
                                    
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                        <button type="button" className="btn btn-primary" id="btnLogin">Đăng nhập</button>
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

export default WelcomeComponent;