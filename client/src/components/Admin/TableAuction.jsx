import React, { Component } from 'react';
import "./assets/css/Table.css";
import ReactOverflowTooltip from 'react-overflow-tooltip';
import Modal from 'react-responsive-modal';
import { getFromStorage } from '../../utils/storage';

class TableAuction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}

	componentDidMount() { this.getAuction(); }
	onOpenModal = () => { this.setState({ open: true }); };
	onCloseModal = () => { this.setState({ open: false }); };

	getAuction() {
		const obj = getFromStorage("login");

		if (obj && obj.access_token) {
			const { access_token } = obj;
			fetch("/admin/auction", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${access_token}`
				}
			})
			.then((res) => res.json())
			.then((json) => {
				this.setState({ list: json });
				console.log(this.state.list);
			});
		}
	}
	handleAdd = () => {

	}
	handleSearch = () => {
		var input, filter, table, tr, td, i;
		input = document.getElementById("searchInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("mainDataTable");
		tr = table.getElementsByTagName("tr");
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[1];
			if (td) {
				if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			}
		}
	};
	createForm = () => {

	}
	render() {
		const tableStyle = {
			verticalAlign: "middle",
			textAlign: "center"
		};
		
		var arr = this.state.list;

		return (
			<div className="col-md-12">
				<Modal open={this.state.open} onClose={this.onCloseModal} center>
					{this.createForm()}
				</Modal>

				{/* Modal confirm */}
				<div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-sm modal-notify modal-danger" role="document">
						<div className="modal-content text-center">
						<div className="modal-header d-flex justify-content-center">
							<p className="heading">Xác nhận thay đổi thông tin</p>
						</div>
						<div className="modal-body">
							<i className="fa fa-times fa-4x animated rotateIn" id="modal-x-icon" />
						</div>
						<div className="modal-footer flex-center">
							<button className="btn btn-outline-danger" onClick={this.handleModalYes} data-dismiss="modal">
								Xác nhận
							</button>
							<button className="btn btn-danger waves-effect" data-dismiss="modal">
								Hủy
							</button>
						</div>
						</div>
					</div>
				</div>
				{/* Modal confirm */}
				<div className="card table-with-switches" style={tableStyle}>
					<div className="card-header ">
						<h2 className="card-title">
							<b>Danh sách phiên đấu giá</b>
						</h2>
						<button className="btn btn-info col-sm-1" tooltip="Thêm" id="btnAdd" onClick={this.handleAdd} tooltip-position="buttom">
							<i className="nc-icon nc-simple-add" />
						</button>
						<div className="form-group row">
							<label htmlFor="searchInput" className="col-sm-1 col-form-label">
								Tìm kiếm:
              				</label>
							<div className="col-sm-8">
								<input type="text" className="form-control tab-search col-sm-3" id="searchInput" onKeyUp={this.handleSearch} placeholder="Nhập tên cần tìm.." title="Tìm kiếm theo tên sản phẩm" />
							</div>
						</div>
					</div>
					<div className="card-body table-full-width">
						<table className="table table-striped table-bordered" id="mainDataTable">
							<thead>
								<tr>
									<th className="text-center">#</th>
									<th>Tên sản phẩm</th>
									<th>Loại</th>
									<th className="text-center">Miêu tả</th>
									<th className="text-center">Link ảnh</th>
									<th className="text-center">Thao tác</th>
									<th className="text-center">Vô hiệu hóa</th>
								</tr>
							</thead>
							<tbody id="mainDataTableBody">
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default TableAuction;