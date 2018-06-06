import React, { Component } from 'react';
import { getFromStorage, removeFromStorage } from "../../utils/storage";
import './Profile.css';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        email: '',
        address: '',
        phone: '',
        id: '',
        fullname: ''
    };
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeAddress = this.handleChangeAddress.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeID = this.handleChangeID.bind(this);
      this.handleChangeFullname = this.handleChangeFullname.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    componentDidMount() {
        this.getProfileInfo();
    } 
    getProfileInfo() {
        const u = getFromStorage("login");
        fetch("/account/getInfo/" + u.username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    id: json.detail[0].username, // constraint PK holder
                    username: json.detail[0].username,
                    email: json.detail[0].email,
                    address: json.detail[0].address,
                    phone: json.detail[0].phone,
                    fullname: json.detail[0].fullname
                });
                
                console.log(this.state.username);
            });
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleChangeAddress(event) {
        this.setState({
            address: event.target.value
        });
    }
    handleChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }
    handleChangeID(event) {
        this.setState({
            id: event.target.value
        });
    }
    handleChangeFullname(event) {
        this.setState({
            fullname: event.target.value
        });
    }
    handleSubmit(event) {
        //console.log(this.state);
            fetch('/account/update', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.id,
                    username: this.state.username,
                    email: this.state.email,
                    address: this.state.address,
                    phone: this.state.phone,
                    fullname: this.state.fullname
                })
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.success) {
                    alert('Thành công');
                }
                else {
                    alert('Xảy ra lỗi');
                }
            });
        event.preventDefault();
        }

    render() {
        return (
            <div className="box_shadow" >
                <div className="container">

                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                            <div id="home" class="container tab-pane active"><br/>
                                <div class="row vertical-divider">
                                <div class="col-sm-12">
                                    <fieldset>
                                        <legend>Thông tin tài khoản:</legend>
                                        <form>
                                            <div class="form-group row">
                                                <label for="username" class="col-sm-2 col-form-label">Tên tài khoản</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="username" placeholder="Tên tài khoản" value={this.state.username} onChange={this.handleChangeUsername} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="newPassword" class="col-sm-2 col-form-label">Mật khẩu mới</label>
                                                <div class="col-sm-10">
                                                    <input type="password" class="form-control" id="newPassword" placeholder="Mật khẩu mới" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="repeatPassword" class="col-sm-2 col-form-label">Nhập lại</label>
                                                <div class="col-sm-10">
                                                    <input type="password" class="form-control" id="repeatPassword" placeholder="Nhập lại" />
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Thông tin cá nhân:</legend>
                                        <form>
                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-2 col-form-label">Họ tên</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="fullname" placeholder="Họ tên" value={this.state.fullname} onChange={this.handleChangeFullname} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="address" class="col-sm-2 col-form-label">Địa chỉ</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="address" placeholder="Địa chỉ" value={this.state.address} onChange={this.handleChangeAddress} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="email" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="phone" class="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="phone" placeholder="Số điện thoại" value={this.state.phone} onChange={this.handleChangePhone} />
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            
                            
                                </div>
                                <center><button class="btn btn-primary" onClick={this.handleSubmit}>Cập nhật</button></center>
                            </div>
                            <div id="menu1" class="container tab-pane fade"><br/>
                                <h3>Menu 1</h3>
                                <p>t2</p>
                            </div>
                                <div id="menu2" class="container tab-pane fade"><br/>
                                    <h3>Menu 2</h3>
                                    <p>t1</p>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default Profile;