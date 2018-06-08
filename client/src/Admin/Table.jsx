import React, { Component } from 'react';

// import './js/light-bootstrap-dashboard.js'

class Table extends Component {
    render() {
        return (
            <div class="col-md-12">
                            <div class="card table-with-switches">
                                <div class="card-header ">
                                    <h4 class="card-title">Danh sách sản phẩm</h4>
                                </div>
                                <div class="card-body table-full-width">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Job Position</th>
                                                <th class="text-right">Salary</th>
                                                <th class="text-right">Active</th>
                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>Andrew Mike</td>
                                                <td>Develop</td>
                                                <td class="text-right">&euro; 99,225</td>
                                                <td class="text-right">
                                                    <input type="checkbox" checked="" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="" data-off-text=""/>
                                                    <span class="toggle"></span>
                                                </td>
                                                <td class="td-actions text-right">
                                                    <a href="#" rel="tooltip" title="View Profile" class="btn btn-info btn-link btn-xs">
                                                        <i class="fa fa-user"></i>
                                                    </a>
                                                    <a href="#" rel="tooltip" title="Edit Profile" class="btn btn-success btn-link btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="#" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td>John Doe</td>
                                                <td>Design</td>
                                                <td class="text-right">&euro; 89,241</td>
                                                <td class="text-right">
                                                    <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="" data-off-text=""/>
                                                    <span class="toggle"></span>
                                                </td>
                                                <td class="td-actions text-right">
                                                    <a href="#" rel="tooltip" title="View Profile" class="btn btn-info btn-link btn-xs">
                                                        <i class="fa fa-user"></i>
                                                    </a>
                                                    <a href="#" rel="tooltip" title="Edit Profile" class="btn btn-success btn-link btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="#" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>  
        );
    }
}

export default Table;