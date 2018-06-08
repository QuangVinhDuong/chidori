import React, { Component } from 'react';
import Table from './Table'
import SideBar from './SideBar';
import './css/bootstrap.min.css'
import './css/light-bootstrap-dashboard.css'
class AdminComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <SideBar/>
                    <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            
                        <Table/>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AdminComponent;