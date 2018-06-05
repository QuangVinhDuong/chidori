import React, { Component } from 'react';
import { getFromStorage, removeFromStorage } from "../../utils/storage";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainData: []
    };
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
                this.setState({ mainData: json });
                console.log(json);
            });
    }
  render() {
      const box_shadow = {
          padding: 10,
          border: "1px solid blue"
      };
      return (
          <div className="box_shadow" >
              <div className="container" style={box_shadow}>

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
                                                    <input type="text" class="form-control" id="username" placeholder="Tên tài khoản" />
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
                                                    <input type="text" class="form-control" id="fullname" placeholder="Họ tên" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="address" class="col-sm-2 col-form-label">Địa chỉ</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="address" placeholder="Địa chỉ" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="email" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="phone" class="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="phone" placeholder="Số điện thoại" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="ID" class="col-sm-2 col-form-label">CMND</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="ID" placeholder="CMND" />
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                            <center><button class="btn btn-primary">Cập nhật</button></center>
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