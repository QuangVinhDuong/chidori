import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ErrorComponent extends Component {
	render() {
		return (
			<div>
				<h1>Có vẻ bạn đã tới nhầm trang, vui lòng quay lại trang chủ.</h1>
				<Link to="/">Trang chủ</Link>
			</div>
		);
	}
}

export default ErrorComponent;