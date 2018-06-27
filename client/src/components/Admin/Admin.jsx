import React, { Component } from 'react';
import './assets/css/light-bootstrap-dashboard.css';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    
    render() {
        var PieChart = require("react-chartjs").Pie;

        var data = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]
        return <div className="col-sm-12">
            <center>
              <h1>Thống kê số liệu</h1>
            </center>
            <div class="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card ">
                                    <div class="card-header ">
                                        <h4 class="card-title">24 Hours Performance</h4>
                                        <p class="card-category">Line Chart</p>
                                    </div>
                                    <div class="card-body ">
                                        <div id="chartPerformance" class="ct-chart "></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card ">
                                    <div class="card-header ">
                                        <h4 class="card-title">NASDAQ: AAPL</h4>
                                        <p class="card-category">Line Chart with Points</p>
                                    </div>
                                    <div class="card-body ">
                                        <div id="chartStock" class="ct-chart "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card ">
                                    <div class="card-header ">
                                        <h4 class="card-title">User Behavior</h4>
                                        <p class="card-category">Multiple Lines Charts</p>
                                    </div>
                                    <div class="card-body ">
                                        <div id="chartBehaviour" class="ct-chart"></div>
                                    </div>
                                    <div class="card-footer ">
                                        <div class="legend">
                                            <i class="fa fa-circle text-info"></i> Open
                                            <i class="fa fa-circle text-danger"></i> Click
                                            <i class="fa fa-circle text-warning"></i> Click Second Time
                                        </div>
                                        <hr/>
                                            <div class="stats">
                                                <i class="fa fa-history"></i> Updated 3 minutes ago
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card ">
                                        <div class="card-header ">
                                            <h4 class="card-title">Public Preferences</h4>
                                            <p class="card-category">Pie Chart</p>
                                        </div>
                                        <div class="card-body ">
                                            <div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>
                                        </div>
                                        <div class="card-footer ">
                                            <div class="legend">
                                                <i class="fa fa-circle text-info"></i> Open
                                            <i class="fa fa-circle text-danger"></i> Bounce
                                            <i class="fa fa-circle text-warning"></i> Unsubscribe
                                        </div>
                                            <hr/>
                                                <div class="stats">
                                                    <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card ">
                                            <div class="card-header ">
                                                <h4 class="card-title">Views</h4>
                                                <p class="card-category">Bar Chart</p>
                                            </div>
                                            <div class="card-body ">
                                                <div id="chartViews" class="ct-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card ">
                                            <div class="card-header ">
                                                <h4 class="card-title">Activity</h4>
                                                <p class="card-category">Multiple Bars Chart</p>
                                            </div>
                                            <div class="card-body ">
                                                <div id="chartActivity" class="ct-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* <PieChart data={data} width="600" height="250" />
            <PieChart data={data} width="600" height="250" />
            <PieChart data={data} width="600" height="250" />
            <PieChart data={data} width="600" height="250" /> */}
          </div>;
    }
}

export default Admin;