import React, { Component } from 'react';
import { getFromStorage, setInStorage } from '../../utils/storage';

import MainComponent from '../Main/MainComponent';
import Admin from '../Admin/Admin';
import './WelcomeComponent.css';
import AdminComponent from '../Admin/AdminComponent';
//import "./script";
//import 'whatwg-fetch';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signUpUsername:'',
            signUpPassword:'',
            signUpFullname:'',
            signUpEmail:'',
            signUpPhone:'',
            signUpAddress:'',

            signInError: '',
            signInUsername: '',
            signInPassword: ''
        };

        this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpFullname = this.onTextboxChangeSignUpFullname.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPhone = this.onTextboxChangeSignUpPhone.bind(this);
        this.onTextboxChangeSignUpAddress = this.onTextboxChangeSignUpAddress.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }
    
    componentDidMount() {
        this.verifyToken();       
    }

    verifyToken() {
        const obj = getFromStorage('login');

        if (obj && obj.token_key) {
            const { username, token_key } = obj;
            // Verify token
            fetch('/account/verify?token=' + token_key)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: token_key,
                            signInUsername: username,                            
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    }
                });
        } else {
            this.setState({
                token: '',
                isLoading: false
            });
        }
    }

    // Button Sign In Clicked event
    onSignIn() {
        const {
            signInUsername,
            signInPassword
        } = this.state;

        fetch('/account/signin', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: signInUsername,
                password: signInPassword,                
            }) 
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    setInStorage('login', { 
                        token_key: json.token,
                        username: signInUsername, 
                        type: json.accountType
                    });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        token: json.token,
                        //signInPassword: '',                        
                    });
                } else {                    
                    this.setState({
                        signInError: json.message,
                        isLoading: false
                    });
                }
            });
    }

    // Button Sign Up Clicked event
    onSignUp() {
        const {
            signUpUsername,
            signUpPassword,
            signUpFullname,
            signUpEmail,
            signUpPhone,
            signUpAddress,
        } = this.state;

        fetch('/account/signup', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: signUpUsername,
                password: signUpPassword,
                fullname: signUpFullname,
                email: signUpEmail,
                phone: signUpPhone,
                address: signUpAddress,
            }) 
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpUsername: '',
                        signUpPassword: '',
                        signUpFullname: '',
                        signUpEmail: '',
                        signUpPhone: '',
                        signUpAddress: ''
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false
                    });
                }
            });
    }

    onTextboxChangeSignInUsername(event) {
        this.setState({
            signInUsername: event.target.value,
        });
    }

    onTextboxChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpUsername(event) {
        this.setState({
            signUpUsername: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpFullname(event) {
        this.setState({
            signUpFullname: event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpPhone(event) {
        this.setState({
            signUpPhone: event.target.value,
        });
    }

    onTextboxChangeSignUpAddress(event) {
        this.setState({
            signUpAddress: event.target.value,
        });
    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInUsername,
            signInPassword,

            signUpError,
            signUpUsername,
            signUpPassword,
            signUpFullname,
            signUpEmail,
            signUpPhone,
            signUpAddress,            
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        if (!token) {
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
                                                    <span>Tên tài khoản: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="username" id="reg-u-name" value={signUpUsername} onChange={this.onTextboxChangeSignUpUsername}/>
                                                </div>
                                            </div>
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Mật khẩu: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="password" name="password" id="reg-pw" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword}/>
                                                </div>
                                            </div>
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Họ tên: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="fullname" id="reg-fu-name" value={signUpFullname} onChange={this.onTextboxChangeSignUpFullname}/>
                                                </div>
                                            </div>    
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Email: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="email" name="email" id="email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/>
                                                </div>
                                            </div>
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Điện thoại: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="phone" id="reg-phone" value={signUpPhone} onChange={this.onTextboxChangeSignUpPhone}/>
                                                </div>
                                            </div>
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Địa chỉ: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="address" id="reg-address" value={signUpAddress} onChange={this.onTextboxChangeSignUpAddress}/>
                                                </div>
                                            </div>
                                            {
                                                (signUpError) ? (
                                                    <p>{signUpError}</p>
                                                ) : (null)
                                            }     
                                        </div>
                                        
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                            <button type="button" className="btn btn-primary" id="btnSignup" onClick={this.onSignUp}>Xác nhận</button>
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
                                                    <input type="text" name="username" id="lo-u-name" value={signInUsername} onChange={this.onTextboxChangeSignInUsername}/>
                                                </div>
                                            </div>
                                            <div className="row format">
                                                <div className="col">
                                                    <span>Password: </span>
                                                </div>
                                                <div className="col">
                                                    <input type="password" name="password" id="lo-pw" value={signInPassword} onChange={this.onTextboxChangeSignInPassword}/>
                                                </div>
                                            </div>
                                            {
                                                (signInError) ? (
                                                    <p>{signInError}</p>
                                                ) : (null)
                                            }                                     
                                        </div>
                                        
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                            <button type="button" className="btn btn-primary" id="btnSignin" onClick={this.onSignIn}>Đăng nhập</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            );
        } else {            
            return (
                 <MainComponent username={this.state.signInUsername} />
                //<AdminComponent/>
            );
        }                
    }
}

export default WelcomeComponent;