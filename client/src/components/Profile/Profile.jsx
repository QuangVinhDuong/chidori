import React, { Component } from 'react';
import { getFromStorage, removeFromStorage } from "../../utils/storage";
import './Profile.css';
import { isNullOrUndefined } from 'util';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        email: '',
        address: '',
        phone: '',
        fullname: '',
        password: '',
        repass: ''
    };
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeAddress = this.handleChangeAddress.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeID = this.handleChangeID.bind(this);
      this.handleChangeFullname = this.handleChangeFullname.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeRePassword = this.handleChangeRePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.passStrength = this.passStrength.bind(this);
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
        });
    }

    handleChangeUsername(event) {this.setState({ username: event.target.value});}
    handleChangeEmail(event) {this.setState({email: event.target.value});}
    handleChangeAddress(event) {this.setState({address: event.target.value});} 
    handleChangePhone(event) {this.setState({phone: event.target.value});} 
    handleChangeID(event) {this.setState({id: event.target.value});} 
    handleChangeFullname(event) {this.setState({fullname: event.target.value});}
    handleChangePassword(event) {this.setState({password: event.target.value});}
    handleChangeRePassword(event) {this.setState({repass: event.target.value});}

    validate() {
        if (this.state.username === "" || this.state.address === "" || this.state.email === "" || this.state.phone === "" || this.state.fullname === "") {
            return false;
        }
        if (this.state.password !== "" && this.state.password !== this.state.repass) {
            return false;
        }
        return true;
    }
    handleSubmit(event) {
        console.log(this.state);
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
                fullname: this.state.fullname,
                password: this.state.password
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
    passStrength(e) {
        if (e.length === 0) return;
        if (e.length < 6) {
            return "Quá yếu";
        }
        else {
            return "Tốt";
        }
    }
    render() {
        return (
            <div className="box_shadow" >
                <div className="container info">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a role="button" className="nav-link active" data-toggle="tab" href="#home">Thông tin</a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link" data-toggle="tab" href="#menu1">Đơn hàng</a>
                        </li>       
                    </ul>

                    <div className="tab-content">
                            <div id="home" className="container tab-pane active"><br/>
                                <div className="row vertical-divider">
                                <div className="col-sm-12">
                                    <fieldset>
                                        <legend>Thông tin tài khoản:</legend>
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="username" className="col-sm-2 col-form-label">Tên tài khoản</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className={this.state.username === "" ? "form-control warning" : "form-control"} id="username" placeholder="Tên tài khoản" value={this.state.username} disabled="disabled" />
                                                </div>
                                                {/* <div className={this.state.username === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.username === "" ? "Không được để trống" : "✔"}</div> */}
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newPassword" className="col-sm-2 col-form-label">Mật khẩu mới</label>
                                                <div className="col-sm-8">
                                                    <input type="password" className="form-control" id="newPassword" placeholder="Mật khẩu mới"  value={this.state.password} onChange={this.handleChangePassword}/>
                                                </div>
                                                <div className="col-sm-2 warning">{this.passStrength(this.state.password)}</div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="repeatPassword" className="col-sm-2 col-form-label">Nhập lại</label>
                                                <div className="col-sm-8">
                                                    <input type="password" className={this.state.repass === "" ? "form-control" : this.state.repass === this.state.password ? "form-control" : "form-control warning"} id="repeatPassword" placeholder="Nhập lại" value={this.state.repass} onChange={this.handleChangeRePassword}/>
                                                </div>
                                                <div className={this.state.repass === "" ? "" : this.state.repass === this.state.password ? "col-sm-2 ok" : "col-sm-2 warning"}>{this.state.repass === "" ? "" : this.state.repass === this.state.password ? "✔" : "Không khớp!"}</div>
                                            </div>
                                        </form>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Thông tin cá nhân:</legend>
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="fullname" className="col-sm-2 col-form-label">Họ tên</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className={this.state.fullname === "" ? "form-control warning" : "form-control"} id="fullname" placeholder="Họ tên" value={this.state.fullname} onChange={this.handleChangeFullname} required/>
                                                </div>
                                                <div className={this.state.fullname === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.fullname === "" ? "Không được để trống" : "✔"}</div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="address" className="col-sm-2 col-form-label">Địa chỉ</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className={this.state.address === "" ? "form-control warning" : "form-control"} id="address" placeholder="Địa chỉ" value={this.state.address} onChange={this.handleChangeAddress} />
                                                </div>
                                                <div className={this.state.address === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.address === "" ? "Không được để trống" : "✔"}</div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                                <div className="col-sm-8">
                                                    <input type="email" className={this.state.email === "" ? "form-control warning" : "form-control"} id="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail}/>
                                                </div>
                                                <div className={this.state.email === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.email === "" ? "Không được để trống" : "✔"}</div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="phone" className="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div className="col-sm-8">
                                                    <input type="number" className={this.state.phone === "" ? "form-control warning" : "form-control"} id="phone" placeholder="Số điện thoại" value={this.state.phone} onChange={this.handleChangePhone}/>
                                                </div>
                                                <div className={this.state.phone === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.phone === "" ? "Không được để trống" : "✔"}</div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                                </div>
                                <center><button className="btn btn-primary" disabled={this.validate() === true ? "" : "disabled"} onClick={this.handleSubmit}>Cập nhật</button></center>
                            </div>
                            <div id="menu1" className="container tab-pane fade"><br/>
                                <h3>Menu 1</h3>
                                <p>t2</p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;