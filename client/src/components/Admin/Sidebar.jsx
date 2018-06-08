import React, { Component } from 'react';
import { getFromStorage, removeFromStorage } from "../../utils/storage";
class Sidebar extends Component {
	render() {
		const iconStyle = {
			"vertical-align": "middle"
		}
		return (
			<div className="sidebar" data-color="blue" data-image="./assets/img/sidebar-5.jpg">
				<div className="sidebar-wrapper">
					<div className="user">
						<div className="photo">
							<center><i className="nc-icon nc-single-02" style={iconStyle}></i></center>
						</div>
						<div className="info ">
							<a data-toggle="collapse" href="#collapseExample" className="collapsed">
								<span>{getFromStorage('login').username}
                                <b className="caret"></b>
								</span>
							</a>
							<div className="collapse" id="collapseExample">
								<ul className="nav">
									<li>
										<a className="profile-dropdown" href="#pablo">
											<span className="sidebar-mini">TK</span>
											<span className="sidebar-normal">Tài khoản</span>
										</a>
									</li>
									<li>
										<a className="profile-dropdown" href="#pablo">
											<span className="sidebar-mini">ĐX</span>
											<span className="sidebar-normal">Đăng Xuất</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<ul className="nav">
						<li className="nav-item ">
							<a className="nav-link" href="../dashboard.html">
								<i className="nc-icon nc-grid-45"></i>
								<p>Dashboard</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-toggle="collapse" href="#componentsExamples">
								<i className="nc-icon nc-bullet-list-67"></i>
								<p>
									Danh mục
                                <b className="caret"></b>
								</p>
							</a>
							<div className="collapse " id="componentsExamples">
								<ul className="nav">
									<li className="nav-item ">
										<a className="nav-link" href="../components/buttons.html">
											<span className="sidebar-mini">SP</span>
											<span className="sidebar-normal">Sản phẩm</span>
										</a>
									</li>
									<li className="nav-item ">
										<a className="nav-link" href="../components/grid.html">
											<span className="sidebar-mini">PĐG</span>
											<span className="sidebar-normal">Phiên đấu giá</span>
										</a>
									</li>
									<li className="nav-item ">
										<a className="nav-link" href="../components/panels.html">
											<span className="sidebar-mini">ND</span>
											<span className="sidebar-normal">Người dùng</span>
										</a>
									</li>
									<li className="nav-item ">
										<a className="nav-link" href="../components/sweet-alert.html">
											<span className="sidebar-mini">TS</span>
											<span className="sidebar-normal">Tham Số</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;