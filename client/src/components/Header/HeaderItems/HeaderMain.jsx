import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderMain.css';
class HeaderMain extends Component {
    constructor(props) {
      super(props);

      this.state = {
        search: '',
        productList: []
      };
      this.handleChangeSearch = this.handleChangeSearch.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      console.log(this.url)
    }
    handleChangeSearch(event) {
      this.setState({search: event.target.value});
    }
    handleSearch(event) {
        event.preventDefault();
    }
    render() {
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
                          <i className={this.state.search == "" ? "fa fa-search on" : "off"}></i>
                          <NavLink className={this.state.search == "" ? "off" : "on"} to={`/search/${this.state.search}`}><i className="fa fa-search"></i></NavLink>
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
                        <div className="cart_icon">
                          <img src="images/cart.png" alt="" />
                          <div className="cart_count">
                            <span>10</span>
                          </div>
                        </div>
                        <div className="cart_content">
                          <div className="cart_text">
                            <a href="#">Giỏ hàng</a>
                          </div>
                          <div className="cart_price">69K</div>
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