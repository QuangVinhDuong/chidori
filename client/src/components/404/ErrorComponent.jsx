import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ErrorComponent.css';
class ErrorComponent extends Component {
	render() {
		return (
			<div className="bigBadBox">
				<div class="header">
					<h1>Đã xảy ra lỗi!</h1>
				</div>
				<div class="w3-main">
					<div class="agile-info">
						<h2>404</h2>
						<h3>Rất tiếc</h3>
						<p>{this.props.message === null ? "Có vẻ bạn đã tới nhầm nơi!" : this.props.message}</p>
						<Link to="/"><i class="fa fa-angle-double-left" aria-hidden="true"></i>Về trang chủ</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorComponent;