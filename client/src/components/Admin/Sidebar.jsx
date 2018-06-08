import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		const iconStyle = {
			"vertical-align": "middle"
		}
		return (
			<div class="sidebar" data-color="blue" data-image="./assets/img/sidebar-5.jpg">
				<div class="sidebar-wrapper">
					<div class="user">
						<div class="photo">
							<center><i className="nc-icon nc-single-02" style={iconStyle}></i></center>
						</div>
						<div class="info ">
							<a data-toggle="collapse" href="#collapseExample" class="collapsed">
								<span>Tania Andrew
                                <b class="caret"></b>
								</span>
							</a>
							<div class="collapse" id="collapseExample">
								<ul class="nav">
									<li>
										<a class="profile-dropdown" href="#pablo">
											<span class="sidebar-mini">MP</span>
											<span class="sidebar-normal">My Profile</span>
										</a>
									</li>
									<li>
										<a class="profile-dropdown" href="#pablo">
											<span class="sidebar-mini">EP</span>
											<span class="sidebar-normal">Edit Profile</span>
										</a>
									</li>
									<li>
										<a class="profile-dropdown" href="#pablo">
											<span class="sidebar-mini">S</span>
											<span class="sidebar-normal">Settings</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<ul class="nav">
						<li class="nav-item ">
							<a class="nav-link" href="../dashboard.html">
								<i class="nc-icon nc-chart-pie-35"></i>
								<p>Dashboard</p>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="collapse" href="#componentsExamples">
								<i class="nc-icon nc-app"></i>
								<p>
									Components
                                <b class="caret"></b>
								</p>
							</a>
							<div class="collapse " id="componentsExamples">
								<ul class="nav">
									<li class="nav-item ">
										<a class="nav-link" href="../components/buttons.html">
											<span class="sidebar-mini">B</span>
											<span class="sidebar-normal">Buttons</span>
										</a>
									</li>
									<li class="nav-item ">
										<a class="nav-link" href="../components/grid.html">
											<span class="sidebar-mini">GS</span>
											<span class="sidebar-normal">Grid System</span>
										</a>
									</li>
									<li class="nav-item ">
										<a class="nav-link" href="../components/panels.html">
											<span class="sidebar-mini">P</span>
											<span class="sidebar-normal">Panels</span>
										</a>
									</li>
									<li class="nav-item ">
										<a class="nav-link" href="../components/sweet-alert.html">
											<span class="sidebar-mini">SA</span>
											<span class="sidebar-normal">Sweet Alert</span>
										</a>
									</li>
									<li class="nav-item ">
										<a class="nav-link" href="../components/notifications.html">
											<span class="sidebar-mini">N</span>
											<span class="sidebar-normal">Notifications</span>
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