import React, { Component } from 'react';


class DanhMuc1 extends Component {
    
    render() {
        const divStyle = {
            paddingTop: '56px',
            background: '#eff6fa',
            paddingBottom: '50px',
        }
        return (
            <div className="box_shadow" style={divStyle}>
                <div className="container">
                    <h1>Test Danh Mục 1</h1>
                </div>                
            </div>
        );
    }
}

export default DanhMuc1;