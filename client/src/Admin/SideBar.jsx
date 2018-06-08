import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div class="sidebar" data-color="blue" data-image="../../assets/img/sidebar-5.jpg">
                <div class="sidebar-wrapper">
                
                <div class="user">
                    <div class="info ">
                        <NavLink to="/" className="collapsed">
                            <span>
                                <i class="nc-icon nc-bank"> Home</i>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="../dashboard.html">
                            <i class="nc-icon nc-bank"></i>
                            <p>Home</p>
                        </a>
                    </li>   
                    
                    
                </ul>
            </div>
            </div>
        );
    }
}

export default SideBar;