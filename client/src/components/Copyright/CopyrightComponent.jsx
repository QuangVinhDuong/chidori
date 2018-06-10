import React, {Component} from 'react';
import './CopyrightComponent.css';
class CopyrightComponent extends Component {
    render() {
        return(
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">
                                
                            <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <div className="copyright_content">
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a role="button" href="https://colorlib.com" target="_blank">Colorlib</a>
                                </div>
                                <div className="logos ml-sm-auto">
                                    <ul className="logos_list">
                                        <li><a role="button" href="#"><img src="../images/logos_1.png" alt=""/></a></li>
                                        <li><a role="button" href="#"><img src="../images/logos_2.png" alt=""/></a></li>
                                        <li><a role="button" href="#"><img src="../images/logos_3.png" alt=""/></a></li>
                                        <li><a role="button" href="#"><img src="../images/logos_4.png" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CopyrightComponent;