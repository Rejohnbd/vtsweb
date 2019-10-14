import React, {Fragment} from 'react';

class Footer extends React.Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <footer className="footer-section section-gap-half">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 footer-left">
                                <a href="#">
                                    <img src="img/logo-w.png" alt="" />
                                </a>
                                <p className="copyright-text">&copy; 2018 Design With
                                    <i className="fa fa-heart" aria-hidden="true"></i> By
                                    <a href="http://dopetheme.com" target="_blank">Dope Theme</a>
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <ul id="social">
                                    <li>
                                        <a target="_blank" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="footer-menu">
                                    <li>
                                        <a href="#">Affiliate Program</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditionss</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="scroll-top">
                    <i className="ti-angle-up"></i>
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;