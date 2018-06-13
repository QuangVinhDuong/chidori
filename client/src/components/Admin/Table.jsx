import React, { Component } from 'react';
import './assets/css/Table.css';
import ReactOverflowTooltip from 'react-overflow-tooltip';
import Modal from 'react-responsive-modal';
class Table extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      list: [],
      open: false,
      modalType: 1,
      currentID: ''
    };
    this.truncateText = this.truncateText.bind(this);
    
  }
  
  componentDidMount() {
    this.getProduct();
    
    
  }
  onOpenModal = () => { this.setState({ open: true }); };
  onCloseModal = () => { this.setState({ open: false }); };
  getProduct() {
    fetch("/product/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ list: json.list });
        //console.log(this.state.list);
      });
    this.handleCheckDelivery = this.handleCheckDelivery.bind(this);
    this.handleCheckDisable = this.handleCheckDisable.bind(this);
  }
  handleCheckDelivery(event) {
    if (!window.confirm("R U SURE"))
      event.target.checked = !event.target.checked;
    this.setState({checked: event.target.checked});
  }
  truncateText(string) {
    if (string.length > 45) {
      return string.substr(0, 45) + ".".repeat(140);
    }
    else {
      return string;
    }
  }

  handleCheckDisable(event) {
    if(!window.confirm("R U SURE"))
      event.target.checked = !event.target.checked;
  }

  handleAdd = (e) => {
    this.setState({ modalType: 1 });
    this.onOpenModal();
  }
  handleUpdate = (e) => {
    this.setState({modalType: 2, currentID: e.target.id});
    this.onOpenModal();
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
  }
	render() {
		const tableStyle = {
			"verticalAlign": "middle",
			"textAlign": "center"
    }
    var arr = this.state.list;
    const createForm = () => {
      if (this.state.modalType === 1)
        return (
          <div>testing.....................</div>
        )
      else
        return <div>
            testing 2....................<div>
              {this.state.currentID}
            </div>
          </div>;
    }
		return (
    <div className="col-md-12">
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        {createForm()}
      </Modal>

      {/* Modal confirm */}
      <div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-notify modal-danger" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center">
              <p class="heading">Are you sure?</p>
            </div>
            <div class="modal-body">
              <i class="fa fa-times fa-4x animated rotateIn" id="modal-x-icon"></i>
            </div>
            <div class="modal-footer flex-center">
              <button className="btn btn-outline-danger">Yes</button>
              <button className="btn btn-danger waves-effect" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal confirm */}


      


        <div className="card table-with-switches" style={tableStyle}>
          
          <div className="card-header ">
            <h2 className="card-title"><b>Danh sách sản phẩm</b></h2>
            <button className="btn btn-info col-sm-1" tooltip="Thêm" id="btnAdd" onClick={this.handleAdd} tooltip-position="buttom">
              <i className="nc-icon nc-simple-add" />
            </button>
          <div className="form-group row">
            <label htmlFor="searchInput" className="col-sm-1 col-form-label">Tìm kiếm:</label>
            <div className="col-sm-8"><input type="text" className="form-control tab-search col-sm-3" id="searchInput" onKeyUp={this.handleSearch} placeholder="Nhập tên cần tìm.." title="Tìm kiếm theo tên sản phẩm" /></div>
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
                  <th className="text-center">Giao hàng</th>
                  <th className="text-center">Thao tác</th>
                  <th className="text-center">Vô hiệu hóa</th>
                </tr>
              </thead>
              <tbody id="mainDataTableBody">
                {arr.map((item, index) => <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center longtext">
                      <ReactOverflowTooltip title={item.productName}>
                        <div>{item.productName}</div>
                      </ReactOverflowTooltip>
                    </td>
                    <td className="text-center">{item.productType}</td>
                    <td className="text-center longtext">
                      {item.description}
                    </td>
                    <td className="text-center ">
                      <label className="switch">
                        <input type="checkbox" onChange={this.handleCheckDelivery} id={`pship${item._id}`} disabled={item.isDeleted === false ? "" : "disabled"} on data-toggle="modal" data-target="#modalConfirmDelete"/>
                        <span className="slider round" />
                      </label>
                    </td>
                    <td className="td-actions text-center ">
                      <button className="btn btn-danger" tooltip="Xóa" disabled={item.isDeleted === false ? "" : "disabled"} id={`pdel${item._id}`} tooltip-position="buttom" data-toggle="modal" data-target="#modalConfirmDelete">
                        <i className="nc-icon nc-simple-remove" />
                      </button>
                      <button className="btn btn-success" tooltip="Sửa" disabled={item.isDeleted === false ? "" : "disabled"} id={`pfix${item._id}`} onClick={this.handleUpdate} tooltip-position="buttom">
                        <i className="nc-icon nc-settings-tool-66" />
                      </button>
                    </td>
                    <td className="text-center ">
                      <label className="switch">
                        <input type="checkbox" onChange={this.handleCheckDisable} id={`pdisa${item._id}`} on />
                        <span className="slider round disable" />
                      </label>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>);
	}
}

export default Table;