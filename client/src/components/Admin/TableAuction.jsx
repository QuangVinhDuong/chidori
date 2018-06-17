import React, { Component } from 'react';
import "./assets/css/Table.css";
import ReactOverflowTooltip from 'react-overflow-tooltip';
import Modal from 'react-responsive-modal';
import { getFromStorage } from '../../utils/storage';

class TableAuction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			open: false,
			currentID: null,
			modalType: 1, // 1 Thêm, 2 sửa
			updateSessionID: null,
			updateStartTime: null,
			updateBidTime: null,
			updateStatus: null,
			updateInitPrice: null,
			updateProductID: null,
			productList: []
		};
	}
	handleOnChangeSessionID = (e) => { this.setState({ updateSessionID: e.target.value});}
	handleOnChangeProductID = (e) => { this.setState({ updateProductID: e.target.value});}
	handleOnChangeStartTime = (e) => {this.setState({updateStartTime: e.target.value});}
	handleOnChangeBidTime = (e) => {this.setState({updateBidTime: e.target.value});}
	handleOnChangeInitPrice = (e) => {this.setState({updateInitPrice: e.target.value});}
	componentDidMount() { this.getAuction(); this.getProduct(); }
	onOpenModal = () => { this.setState({ open: true }); };
	onCloseModal = () => { this.setState({ open: false }); };
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
				this.setState({ list: json.list });
				console.log(this.state.list);
			});
		}
	}
	getProduct() {
		const obj = getFromStorage("login");

		if (obj && obj.access_token) {
			const { access_token } = obj;
			fetch("/admin/productListAU", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${access_token}`
				}
			})
			.then((res) => res.json())
			.then((json) => {
				this.setState({ productList: json.plist });
				//console.log(this.state.productList);
			});
		}
	}
	submitAuctionSession() {
		const obj = getFromStorage('login');
		if (obj && obj.access_token) {
			var ID = this.state.currentID; // get current row ID
			const { access_token } = obj;
			fetch(`/admin/auction`, {
				method: `${this.state.modalType === 1 ? "POST" : "PUT"}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${access_token}`
				},
				body: JSON.stringify({
					key: ID,
					val: [
						this.state.updateSessionID,
						this.state.updateStartTime,
						this.state.updateBidTime,
						this.state.updateStatus,
						this.state.updateInitPrice,
						this.state.updateProductID
					]
				})
			})
				.then((res) => res.json())
				.then((json) => {
					if (json.success) {
						//console.log(json);
						if (this.state.modalType === 1) {
							this.getAuction();
						}
						// else {
						// 	var temp = JSON.parse(JSON.stringify(this.state.list));
						// 	temp.forEach((i) => {
						// 		if (i._id === ID) {
						// 			(i.productName = this.state.updateName), (i.productType = this.state.updateType), (i.description = this.state.updateDesc), (i.productImage = this.state.updateLink);
						// 		}
						// 	});
						// 	this.setState({ list: temp });
						// }
					} else {
						alert("Xảy ra lỗi");
					}
				});
		} 
	}
	handleAdd = () => {
		this.setState({
			open: true, 
			modalType: 1, 
			currentID: "",
			updateSessionID: "12",
			updateStartTime: "12:12",
			updateBidTime: "12:0",
			updateStatus: 0,
			updateInitPrice: 1234,
			updateProductID: this.state.productList[0]._id // Mặc định là cái đầu tiên.
		})
	}
	handleSubmit = () => {
		this.submitAuctionSession();
		this.onCloseModal();
	}
	validate = () => {
		return (this.state.updateSessionID === "" || this.state.updateStartTime === "" || this.state.updateBidTime === "" || this.state.updateStatus === "" | this.state.updateInitPrice === "" || this.state.updateProductID === "");
	}
	createForm = () => {
		var t = this.state.productList;
		return (
          <div>
            <b><center><h2>{this.state.modalType === 1 ? "Thêm phiên đấu giá" : "Chỉnh sửa thông tin phiên đấu giá"}</h2></center></b>
            <form className="col-sm-12" onSubmit={(e) => {e.preventDefault();}}>
              <div className="form-group row col-sm-12">
                <label htmlFor="productName" className="col-sm-2 col-form-label">Mã phiên</label>
                <div className="col-sm-8">
                  <input type="number" className="form-control" required value={this.state.updateSessionID} onChange={this.handleOnChangeSessionID}/>
                </div>
                <div className={this.state.updateSessionID === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.updateSessionID === "" ? "Đừng bỏ trống" : "✔"}</div>
              </div>

              <div className="form-group row col-sm-12">
                <label htmlFor="productName" className="col-sm-2 col-form-label">Tên sản phẩm</label>
                <div className="col-sm-8">
                  <select value={this.state.updateProductID} onChange={this.handleOnChangeProductID} className="form-control au">
                    {
						t.map((item, index) => (
							<option value={item._id}>{item.productName}</option>
						))
					}
                  </select>
                </div>
              </div>
              <div className="form-group row col-sm-12">
                <label htmlFor="productName" className="col-sm-2 col-form-label">Thời gian đấu</label>
                <div className="col-sm-8">
                  <input type="datetime-local" className="form-control" required value={this.state.updateStartTime} onChange={this.handleOnChangeStartTime}/>
                </div>
                <div className={this.state.updateStartTime === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.updateStartTime === "" ? "Đừng bỏ trống" : "✔"}</div>
              </div>
              <div className="form-group row col-sm-12">
                <label htmlFor="productName" className="col-sm-2 col-form-label">Thời lượng</label>
                <div className="col-sm-8">
                  <input type="time" className="form-control" required value={this.state.updateBidTime} onChange={this.handleOnChangeBidTime}/>
                </div>
                <div className={this.state.updateBidTime === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.updateBidTime === "" ? "Đừng bỏ trống" : "✔"}</div>
              </div>
			  <div className="form-group row col-sm-12">
                <label htmlFor="productName" className="col-sm-2 col-form-label">Giá khởi đầu</label>
                <div className="col-sm-8">
                  <input type="number" className="form-control" required value={this.state.updateInitPrice} onChange={this.handleOnChangeInitPrice}/>
                </div>
                <div className={this.state.updateInitPrice === "" ? "col-sm-2 warning" : "col-sm-2 ok"}>{this.state.updateInitPrice === "" ? "Đừng bỏ trống" : "✔"}</div>
              </div>
              <center><button className="btn btn-primary" disabled={this.validate() ? "disabled" : null} onClick={this.handleSubmit}>{this.state.modalType === 1 ? "Thêm" : "Cập nhật"}</button><button className="btn btn-danger" id="adminProductAdd" onClick={this.onCloseModal}>Thoát</button></center>
            </form>
          </div>
        );
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
									<th className="text-center">Mã phiên</th>
									<th className="text-center">Tên sản phẩm</th>
									<th className="text-center">Thời gian bắt đầu</th>
									<th className="text-center">Thời gian đấu</th>
									<th className="text-center">Trạng thái</th>
									<th className="text-center">Giá hiện tại</th>
									<th className="text-center">Giá khởi đầu</th>
									<th className="text-center">Thao tác</th>
									<th className="text-center">Hủy phiên</th>
									<th className="text-center">Vô hiệu hóa</th>
								</tr>
							</thead>
							<tbody id="mainDataTableBody">
								{arr.map((item, index) => <tr>
									<td className="text-center">{item.sessionID}</td>
									<td className="text-center longtext">
									<ReactOverflowTooltip title={item.p.productName}>
										<div>{item.p.productName}</div>
									</ReactOverflowTooltip>
									</td>
									<td className="text-center">{item.startTime}</td>
									<td className="text-center">{item.bidTime}</td>
									<td className="text-center">{item.aus.statusName}</td>
									<td className="text-center">{item.initPrice}</td>
									<td className="text-center">{item.currentPrice}</td>
									<td className="td-actions text-center ">
										<button className="btn btn-success" tooltip="Xem/Sửa" disabled={item.isDeleted} id={`afix${item._id}`} onClick={this.handleUpdate} tooltip-position="buttom">
											<i className="nc-icon nc-settings-tool-66" />
										</button>
									</td>
									<td className="text-center ">
										<label className="switch">
											<input type="checkbox" onClick={this.handleCheckDisable} disabled={!item.isDeleted ? item.status === 1 ? null : "disabled" : "disabled" } data-toggle ="modal" data-target="#modalConfirmDelete" id={`adis${item._id}`} on checked={item.isDisabled} />
											<span className="slider round disable" />
										</label>
									</td>
									<td className="text-center ">
										<label className="switch">
											<input type="checkbox" onClick={this.handleCheckDeleted} id={`adel${item._id}`} on checked={item.isDeleted}/>
											<span className="slider round disable" data-toggle="modal" data-target="#modalConfirmDelete" />
										</label>
									</td>
								</tr>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default TableAuction;