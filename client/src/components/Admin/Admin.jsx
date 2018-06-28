import React, { Component } from 'react';
import './assets/css/light-bootstrap-dashboard.css';
import {getFromStorage} from '../../utils/storage';
import CanvasJS from './assets/js/canvasjs-2.1.3/canvasjs.min.js';
import './assets/css/Admin.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getData();
        
    }
    getData() {
        const obj = getFromStorage("login");

        if (obj && obj.access_token) {
            const { access_token } = obj;
            fetch("/admin/chartData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    if (json.success) { 
                        console.log(json);
                        this.setState({ 
                            userData: json.userData,
                            productData: json.productData
                        });
                        this.loadChart();
                    }
                });
        } 
    }
    loadChart() {
        var temp = this.processChartData(this.state.userData);
        var chart = new CanvasJS.Chart("chartUser", {
          theme: "light2",
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: ""
          },
          data: [
            {
              type: "pie",
              startAngle: 45,
              yValueFormatString: '#,##0.0#"%"',
              dataPoints: temp
            }
          ]
        });
        chart.render();

        var temp2 = this.processChartData(this.state.productData);
        var chart2 = new CanvasJS.Chart("chartProduct", {
          theme: "light2",
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: ""
          },
          data: [
            {
              type: "pie",
              startAngle: 45,
              yValueFormatString: '#,##0.0#"%"',
              dataPoints: temp2
            }
          ]
        });
        chart2.render();
    }
    processChartData(list) {
        var temp = [];
        list.forEach((i, index) => {
            temp.push({
                y: i.count,
                label: i._id
            });
        });
        return temp;
    }

    render() {
        return <div className="col-sm-12">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-chart text-warning"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="numbers">
                                        <p className="card-category">Number</p>
                                        <h4 className="card-title">150GB</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer ">
                            <hr/>
                                <div className="stats">
                                    <i className="fa fa-refresh"></i> Update Now
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-light-3 text-success"></i>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="numbers">
                                            <p className="card-category">Revenue</p>
                                            <h4 className="card-title">$ 1,345</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <hr/>
                                    <div className="stats">
                                        <i className="fa fa-calendar-o"></i> Last day
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-vector text-danger"></i>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="numbers">
                                                <p className="card-category">Errors</p>
                                                <h4 className="card-title">23</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr/>
                                        <div className="stats">
                                            <i className="fa fa-clock-o"></i> In the last hour
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-favourite-28 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="numbers">
                                                    <p className="card-category">Followers</p>
                                                    <h4 className="card-title">+45K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer ">
                                        <hr/>
                                            <div className="stats">
                                                <i className="fa fa-refresh"></i> Update now
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card ">
                                <div className="card-header ">
                                    <h4 className="card-title">24 Hours Performance</h4>
                                    <p className="card-category">Line Chart</p>
                                </div>
                                <div className="card-body ">
                                    <div id="chartPerformance" className="ct-chart">
                                        <div id="chartUser"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card ">
                                <div className="card-header ">
                                    <h4 className="card-title">NASDAQ: AAPL</h4>
                                    <p className="card-category">Line Chart with Points</p>
                                </div>
                                <div className="card-body ">
                                    <div id="chartStock" className="ct-chart">
                                        <div id="chartProduct"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div id="chartAuction"></div>
            </div>
          </div>;
    }
}

export default Admin;