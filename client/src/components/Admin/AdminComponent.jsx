import React, { Component } from 'react';
import Table from './Table';
import Sidebar from './Sidebar';
class AdminComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <Sidebar/>
                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <Table/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AdminComponent;