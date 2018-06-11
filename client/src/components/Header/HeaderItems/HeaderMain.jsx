import React, { Component } from 'react'; 
import Modal from 'react-responsive-modal';
import { Link, Redirect, NavLink, withRouter } from 'react-router-dom';
import './HeaderMain.css';
import ReactOverflowTooltip from 'react-overflow-tooltip';
class HeaderMain extends Component {
    constructor(props) {
      super(props);

      this.state = {
        search: '',
        productList: [],
        open: false
      };
      
      this.handleChangeSearch = this.handleChangeSearch.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

      
  } onOpenModal = () => {
    this.setState({ open: true });
    
  };

  onCloseModal = () => {
    this.setState({ open: false });
    
  };
    handleChangeSearch(event) {
      this.setState({search: event.target.value});
    }
    handleSearch(event) {
        event.preventDefault();
    }
    render() {
      const open = this.state.open; 
      const tableStyle = {
        "vertical-align": "middle",
        "text-align": "center"
      }
        return <div className="header_main">
            <div className="container">
              <div className="row">
                {/*Logo*/}
                <div className="col-lg-2 col-sm-3 col-3 order-1">
                  <div className="logo_container">
                    <div className="logo">
                      <NavLink to="/">
                        <img src="images/logo.png" alt="" width="120" height="75.6" />
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/*Search*/}
                <div className="col-lg-8 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form className="header_search_form clearfix" onSubmit={this.handleSearch}>
                          <input type="search" required className="header_search_input" placeholder="Tìm sản phẩm..." value={this.state.search} onChange={this.handleChangeSearch} />

                          <button type="submit" className="header_search_button trans_300" value="Submit">
                            <i className={this.state.search == "" ? "fa fa-search on" : "off"} />
                            {/* <Redirect className={this.state.search == "" ? "off" : "on"} to={`/search/${this.state.link}`}><i className="fa fa-search"></i></Redirect> */}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Wishlist*/}
                <div className="col-lg-2 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    {/*Cart*/}
                    <div className="cart">
                      <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div className="cart_content">
                          <div className="cart_text">
                            <button className="btn btn-primary cart" onClick={this.onOpenModal}>
                              <img src="images/Bag.png" alt="" width="40" height="40" /> Giỏ hàng
                            </button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                              <div className="col-md-12">
                                <div className="card table-with-switches" style={tableStyle}>
                                  <div className="card-header ">
                                    <h4 className="card-title"><center><h3>Danh sách chờ đặt hàng</h3></center></h4>
                                  </div>
                                  <div className="card-body table-full-width">
                                    <table className="table table-striped">
                                      <thead>
                                        <tr>
                                          <th className="text-center">#</th>
                                          <th>Tên sản phẩm</th>
                                          <th className="text-center">Miêu tả</th>
                                          <th className="text-center">Đặt hàng</th>
                                          <th className="text-center">Hủy</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="text-center">1</td>
                                          <td className="text-center longtext" >
                                            <ReactOverflowTooltip title="{item.productName}">
                                              <div>ten sp</div>
                                            </ReactOverflowTooltip>
                                          </td>
                                          <td className="text-center longtext" >qweqwedfasdfasdasdasd</td>
                                          <td className="text-center">
                                            <label class="switch">
                                              <input type="checkbox" on />
                                              <span class="slider round"></span>
                                            </label>
                                          </td>
                                          <td className="td-actions text-center">
                                            <button className="btn btn-danger" tooltip="Xóa" tooltip-position="buttom"><i className="nc-icon nc-simple-remove"></i></button>
                                          </td>
                                        </tr>

                                      </tbody>
                                    </table>
                                  <button className="btn btn-primary">Xác nhận</button>
                                  </div>
                                </div>
                              </div>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    }
}

 export default HeaderMain;